import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CarDataCollection } from 'src/cars/schemas/car.schema';

// create interface to be used when creating car data objects from request data
interface CarDataInterface {
    'brand': string,
    'model': string,
    'date': string,
    'colour': string,
    'mongoid'? : string
}

// highlight injectable so may be injected into other components
@Injectable()
export class CarsService {
        // include mongoose/schema information within class
        constructor(@InjectModel(CarDataCollection.name) private carModel: Model<CarDataCollection>){}

            // service which requests and returns all car data from db - async so doesnt stop other processes and can wait for response and promise representsa the eventual completion
            async findAll(): Promise<CarDataCollection[]> {
            return this.carModel.find().exec();
        
          }
            // service which takes input data from @body and creates an object which is then saved as new data in db 
            async create(reqCarData): Promise<CarDataCollection> {
                let inputCarData: CarDataInterface = {
                    'brand': reqCarData['car-brand-input'],
                    'model': reqCarData['car-model-input'],
                    'date': reqCarData['car-year-input'],
                    'colour': reqCarData['car-colour-input']
                }
                const createdCar = new this.carModel(inputCarData);
                return createdCar.save();
          }


          // service which takes input data from @body and deletes a data entry from db which matches the @body mongoid value 
          async deleteOneCar(requestId): Promise<string> {
                let deleteId: string = requestId['mongoid']
                return this.carModel.findByIdAndDelete(deleteId)
          }

          // service which creates a new data object from @body - then matches @body mongoid with db, and replaces existing db data for entry with new data object
          async updateOneCar(reqCarData): Promise<string> {
            let putId: string = reqCarData['mongoid']
            let updateCarData: CarDataInterface = {
                'brand': reqCarData['car-brand-update'],
                'model': reqCarData['car-model-update'],
                'date': reqCarData['car-date-update'],
                'colour': reqCarData['car-colour-update']
            }
            return this.carModel.findByIdAndUpdate(putId, updateCarData)
      }
}
