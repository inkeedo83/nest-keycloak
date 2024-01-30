import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  public(): string {
    return 'public';
  }

  @Get()
  protected(): string {
    return 'protect';
  }
}
