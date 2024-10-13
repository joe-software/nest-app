import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Post('')
  pushCarData(): string {
    this.appService.create({
      brand: 'test1', 
      model: 'test2',
      date: 'date !!', 
      colour: 'test3',
    })
    return this.appService.getCarData();
  }

  @Get('')
  getCarData(): {} {
    return this.appService.findAll()
  }


  }




