import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('nope')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('test')
  getTestHello(): string {
    return this.appService.getHello();
  }
}

@Controller()
export class TestAppController {
  constructor() {}

  @Get()
  getHello(): string {
    return 'hello from me';
  }


}



