import { Module } from '@nestjs/common';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';
import { ConfigModule } from '@nestjs/config';


const dotenv = require('dotenv');
dotenv.config();
const uri = process.env.DBSTRING

@Module({
  //import mongoose/scheme data into the module and relevant controllers and providers
  imports: [ConfigModule.forRoot()],
  controllers: [CarsController],
  providers: [CarsService]
})
export class CarsModule {}
