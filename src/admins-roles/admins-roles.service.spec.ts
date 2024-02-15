import { Test, TestingModule } from '@nestjs/testing';
import { AdminsRolesService } from './admins-roles.service';

describe('AdminsRolesService', () => {
  let service: AdminsRolesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdminsRolesService],
    }).compile();

    service = module.get<AdminsRolesService>(AdminsRolesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
