import { Module } from '@nestjs/common';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';
import { ConfigModule } from '@nestjs/config';
import {PrismaService} from '../prisma.service'


const dotenv = require('dotenv');
dotenv.config();

@Module({
  //import mongoose/scheme data into the module and relevant controllers and providers
  imports: [ConfigModule.forRoot()],
  controllers: [CarsController],
  providers: [CarsService, PrismaService]
})
export class CarsModule {}
