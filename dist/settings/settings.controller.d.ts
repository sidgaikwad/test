import { CrudController } from '@nestjsx/crud';
import { Settings } from './settings.entity';
import { SettingsService } from './settings.service';
export declare class SettingsController implements CrudController<Settings> {
    service: SettingsService;
    constructor(service: SettingsService);
    getCount(query: any, res: any): Promise<any>;
}
