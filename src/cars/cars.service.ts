import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CarDataCollection } from 'src/cars/schemas/car.schema';

interface CarDataInterface {
    'brand': string,
    'model': string,
    'date': string,
    'colour': string,
    'mongoid'? : string
}


@Injectable()
export class CarsService {
        constructor(@InjectModel(CarDataCollection.name) private carModel: Model<CarDataCollection>){}

            async findAll(): Promise<CarDataCollection[]> {
            return this.carModel.find().exec();
        
          }

            async create(reqCarData): Promise<CarDataCollection> {
                let inputCarData: CarDataInterface = {
                    'brand': reqCarData.brand,
                    'model': reqCarData.model,
                    'date': reqCarData.date,
                    'colour': reqCarData.colour
                }
                console.log(inputCarData)
                const createdCar = new this.carModel(inputCarData);
                return createdCar.save();
          }

          async deleteOneCar(requestId): Promise<string> {
                let deleteId: string = requestId['mongoid']
                return this.carModel.findByIdAndDelete(deleteId)
          }
}
