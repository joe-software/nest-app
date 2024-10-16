import { Controller, Get, Post, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('') 
   getCarData(): {} {

    return 'route for / does not return, try /cars'
  }

  }




