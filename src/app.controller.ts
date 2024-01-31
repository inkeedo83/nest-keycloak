import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './auth/auth.guard';
import { Roles } from './auth/roles.decorator';
import { RolesGuard } from './auth/roles.guard';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('test')
export class AppController {
  constructor() {}

  @Get('pub')
  @Roles(['user'])
  public(): string {
    return 'public';
  }

  @Get('prot')
  @Roles(['admin'])
  protected(): string {
    return 'protect';
  }
}
