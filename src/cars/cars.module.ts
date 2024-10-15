import { Module } from '@nestjs/common';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { CarDataCollection, CarSchema } from 'src/cars/schemas/car.schema';

const dotenv = require('dotenv');
dotenv.config();
const uri = process.env.DBSTRING

@Module({
  imports: [ConfigModule.forRoot(), MongooseModule.forRoot(uri), MongooseModule.forFeature([{name: CarDataCollection.name, schema: CarSchema}])],
  controllers: [CarsController],
  providers: [CarsService]
})
export class CarsModule {}
