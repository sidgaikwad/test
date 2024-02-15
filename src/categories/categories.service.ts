import { Injectable, ForbiddenException, Req, UploadedFile } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Categories } from './categories.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CommonService } from 'src/common/common.service';

@Injectable()
export class CategoriesService extends TypeOrmCrudService<Categories> {
    private repository: Repository<Categories> = null;
    constructor(
        @InjectRepository(Categories) categoriesRepository: Repository<Categories>,
        private readonly commonService: CommonService,
    ) {
        super(categoriesRepository);
        this.repository = categoriesRepository;
    }

    async updatePriority(req: any): Promise<boolean> {
        let checkAllUpdated = true;
        req.body.forEach(async (id, index) => {
            const update = await this.repository.update({ id: id }, {
                priority: index
            });
            if (!update) {
                checkAllUpdated = false;
            }
        });
        return checkAllUpdated;
    }

    async getCount(query: any): Promise<any> {
        const data =  await this.repository.findAndCount({where: {isDeleted: false}});
        return data[1]
    }
}
