import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './auth/auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('test')
export class AppController {
  constructor() {}

  @Get('pub')
  public(): string {
    return 'public';
  }

  @Get('prot')
  protected(): string {
    return 'protect';
  }
}
