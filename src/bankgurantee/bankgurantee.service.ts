import { Injectable, ForbiddenException, Req, UploadedFile, Get, Res } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { BankGurantee } from './bankgurantee.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CommonService } from 'src/common/common.service';
import { Settings } from 'src/settings/settings.entity';
import { Tendor } from 'src/tendor/tendor.entity';

@Injectable()
export class BankGuranteesService extends TypeOrmCrudService<BankGurantee> {
    private repository: Repository<BankGurantee> = null
    private settingRepository: Repository<Settings> = null;
    private tendorRepository: Repository<Tendor> = null;
    constructor(
        @InjectRepository(BankGurantee) bankGuranteesRepository: Repository<BankGurantee>,
        @InjectRepository(Settings) settingRepository: Repository<Settings>,
        @InjectRepository(Tendor) tendorRepository: Repository<Tendor>,
        private readonly commonService: CommonService,
    ) {
        super(bankGuranteesRepository);
        this.repository = bankGuranteesRepository;
        this.settingRepository = settingRepository;
        this.tendorRepository = tendorRepository;
    }

    async getCount(query: any): Promise<any> {
        return await this.count();
    }

    async updateValue(): Promise<any> {
        const response = {
            message: "Invalid request",
            responseCode: 400,
        };
        try {
            const balance = await this.settingRepository.query(`select sum(amount) from "bankGurantee" as balance where "isFdr" = false`);
            const sum = balance[0].sum == null ? 0 : Number(balance[0].sum);
            const fdr = await this.settingRepository.query(`select sum("fdrDeposit") from "bankGurantee" as fdr`);
            const fdrNum = fdr[0].sum == null ? 0 : Number(fdr[0].sum);
            const setting = await this.settingRepository.find()
            const extraBgTakenBalance = setting[0].bgLimit > sum ? 0 : sum - setting[0].bgLimit
            const marginreqOnBgLimit = (setting[0].margin) / 100 * setting[0].bgLimit;
            const totalFdrReq = marginreqOnBgLimit + setting[0].extraMarReqForExtraBg;
            const extraFdrGivenToBank = totalFdrReq - fdrNum;
            await this.settingRepository.update({ id: setting[0].id }, { totalBgTaken: sum, actualFdrGiven: fdrNum, extraBgTakenBalance: extraBgTakenBalance, marginreqOnBgLimit: marginreqOnBgLimit, extraMarReqForExtraBg: extraBgTakenBalance, totalFdrReq: totalFdrReq, extraFdrGivenToBank: extraFdrGivenToBank })
            response.message = "values updated";
            response.responseCode = 200;

        } catch (error) {
            console.log(error);
            response.message = "Error while updating";
        }
        return response;
    }

    async analytics(body: any): Promise<any> {
        const response = {
            data: null,
            message: "Invalid request",
            responseCode: 400
        };
        try {
            const finalData = []
            // if (body.isCompleted == true) {
                const data = await this.tendorRepository.query(`
                select tendor.id,tendor.name ,tendor."acceptanceLetterNumber", tendor."contractAgreementNumber",
                "department-master".name as "departName",
                "advertisedValue",
                "periodComp",
                "extensionTill",
                "tendor"."completedDate"
                from tendor
                left join "department-master" on "department-master".id = tendor."departmentId"
                where tendor."isCompleted" = ${body.isCompleted}`)
                for (let i = 0; i < data.length; i++) {
                    const sale = await this.repository.query(`select sum(gross) from sales where "tendorId" = ${data[i].id}`)
                    const percent = (sale[0].sum * 100) /  data[0].advertisedValue
                    const payload = {
                        name: data[i].name,
                        department: data[i].departName,
                        acceptanceLetterNumber: data[i].acceptanceLetterNumber,
                        contractAgreementNumber: data[i].contractAgreementNumber,
                        advertisedValue:data[0].advertisedValue ,
                        extensionTill:data[0].extensionTill,
                        periodComp:data[0].periodComp,
                        amountrecieve:sale[0].sum,
                        completedDate:data[0].completedDate,
                        balanceAmount:data[0].advertisedValue - sale[0].sum,
                        percentOfcompletion : percent.toFixed(2)
                    }
                    finalData.push(payload)
                }
            // } else {
            //     const data = await this.tendorRepository.find({ where: { isCompleted: false }, relations: ['department'] })
            //     for (let i = 0; i < data.length; i++) {
            //         const payload = {
            //             name: data[i].name,
            //             department: data[i].department.name,
            //             acceptanceLetterNumber: data[i].acceptanceLetterNumber,
            //             contractAgreementNumber: data[i].contractAgreementNumber,
            //         }
            //         finalData.push(payload)
            //     }
            // }
            response.data = finalData;
            response.message = "data";
            response.responseCode = 200;
        } catch (error) {
            console.log(error);
            response.message = "Failed to save";
            response.responseCode = 400;
        }
        return response;
    }
}
