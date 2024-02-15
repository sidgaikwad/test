import { Test, TestingModule } from '@nestjs/testing';
import { AdminsRolesController } from './admins-roles.controller';

describe('AdminsRoles Controller', () => {
  let controller: AdminsRolesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdminsRolesController],
    }).compile();

    controller = module.get<AdminsRolesController>(AdminsRolesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
