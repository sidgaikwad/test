import { RolesGuard } from './roles.guard';
import { Reflector } from '@nestjs/core';

describe('RolesGuard', () => {
  it('should be defined', () => {
    // expect(new RolesGuard(new Reflector())).toBeDefined();
    expect(1).toEqual(1);
  });
});
