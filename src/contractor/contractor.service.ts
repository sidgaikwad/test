import { Injectable, ForbiddenException, Req, UploadedFile } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Contractor } from './contractor.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CommonService } from 'src/common/common.service';

@Injectable()
export class ContractorService extends TypeOrmCrudService<Contractor> {
    private repository: Repository<Contractor> = null;
    constructor(
        @InjectRepository(Contractor) subCategoryRepository: Repository<Contractor>,
        private readonly commonService: CommonService,
    ) {
        super(subCategoryRepository);
        this.repository = subCategoryRepository;
    }

    // async updatePriority(req: any): Promise<boolean> {
    //     let checkAllUpdated = true;
    //     req.body.forEach(async (id, index) => {
    //         const update = await this.repository.update({ id: id }, {
    //             priority: index
    //         });
    //         if (!update) {
    //             checkAllUpdated = false;
    //         }
    //     });
    //     return checkAllUpdated;
    // }

    async getCount(query: any): Promise<any> {
        return await this.count();
    }
}
