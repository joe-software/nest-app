import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CarDataCollection } from 'src/cars/schemas/car.schema';


@Injectable()
export class CarsService {
        constructor(@InjectModel(CarDataCollection.name) private carModel: Model<CarDataCollection>){}

        async findAll(): Promise<CarDataCollection[]> {
            return this.carModel.find().exec();
          }

          async create(inputCarData): Promise<CarDataCollection> {
            console.log(inputCarData)
            const createdCar = new this.carModel(inputCarData);
            return createdCar.save();
          }
}
