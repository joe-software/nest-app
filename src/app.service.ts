import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CarDataCollection } from './schemas/car.schema'; 

@Injectable()
export class AppService {
  constructor(@InjectModel(CarDataCollection.name) private carModel: Model<CarDataCollection>) {}
  getCarData(): string {
    return 'Hello World!';
  }

  async findAll(): Promise<CarDataCollection[]> {
    return this.carModel.find().exec();
  }

  async create(inputCarData): Promise<CarDataCollection> {
    const createdCar = new this.carModel(inputCarData);
    return createdCar.save();
  }



}
