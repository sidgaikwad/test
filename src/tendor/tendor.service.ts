import { Injectable, ForbiddenException, Req, UploadedFile, Get, Res } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Tendor } from './tendor.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CommonService } from 'src/common/common.service';

@Injectable()
export class TendorsService extends TypeOrmCrudService<Tendor> {
    private repository: Repository<Tendor> = null
    constructor(
        @InjectRepository(Tendor) tendorsRepository: Repository<Tendor>,
        private readonly commonService: CommonService,
    ) {
        super(tendorsRepository);
        this.repository = tendorsRepository;
    }

    async getCount(query: any): Promise<any> {
        return await this.count();
    }
    26316

    async getEmd(query: any): Promise<any> {
        let emd = await this.repository.createQueryBuilder("tendor")
            .where('tendor.status= :value', { value: query.status })
            .andWhere('tendor.isEmdReturn=:bool', { bool: false })
            .getMany()
        // let emd= await this.repository.query("select earnestmoney from tendor where status='2'")
        var amount: number = 0;
        for (var i = 0; i < emd.length; i++) {
            amount += emd[i].earnestmoney
        }
        return amount
    }

    async analytics(body: any): Promise<any> {
        const response = {
            data: null,
            message: "Invalid request",
            responseCode: 400
        };
        try {
            const finalData = []
            if (body.isCompleted == true) {
                const data = await this.repository.find({ isCompleted: true  })
                for (let i = 0; i < data.length; i++) {
                    const payload = {
                        name: data[i].name,
                        department: data[i].department.name,
                        acceptanceLetterNumber: data[i].acceptanceLetterNumber,
                        contractAgreementNumber: data[i].contractAgreementNumber,
                    }
                    finalData.push(payload)
                }
            } else {
                const data = await this.repository.find({ where: { isCompleted: false }, relations: ['department'] })
                for (let i = 0; i < data.length; i++) {
                    const payload = {
                        name: data[i].name,
                        department: data[i].department.name,
                        acceptanceLetterNumber: data[i].acceptanceLetterNumber,
                        contractAgreementNumber: data[i].contractAgreementNumber,
                    }
                    finalData.push(payload)
                }
            }
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
