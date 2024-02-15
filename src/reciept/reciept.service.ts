import { Injectable, ForbiddenException, Req, UploadedFile } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Reciept } from './reciept.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CommonService } from 'src/common/common.service';

@Injectable()
export class RecieptService extends TypeOrmCrudService<Reciept> {
    private repository: Repository<Reciept> = null;
    constructor(
        @InjectRepository(Reciept) subCategoryRepository: Repository<Reciept>,
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
