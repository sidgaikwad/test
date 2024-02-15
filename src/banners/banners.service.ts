import { Injectable, ForbiddenException, Req, UploadedFile } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Banner } from './banners.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CommonService } from 'src/common/common.service';

@Injectable()
export class BannersService extends TypeOrmCrudService<Banner> {
    private repository: Repository<Banner> = null;
    constructor(
        @InjectRepository(Banner) bannersRepository: Repository<Banner>,
        private readonly commonService: CommonService,
    ) {
        super(bannersRepository);
        this.repository = bannersRepository;
    }

    async getCount(query: any): Promise<any> {
        return await this.count();
    }

    async updatePriority(req: any): Promise<boolean> {
        let checkAllUpdated = true;
        req.body.forEach(async (id, index) => {
            const update = await this.repository.update({ id: id }, {
                order: index
            });
            if (!update) {
                checkAllUpdated = false;
            }
        });
        return checkAllUpdated;
    }
}
