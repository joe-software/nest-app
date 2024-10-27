import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { User, Car, Prisma } from '@prisma/client';

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
        
        constructor(private prisma: PrismaService){}

            // service which requests and returns all car data from db - async so doesnt stop other processes and can wait for response and promise representsa the eventual completion
            async findAll(): Promise<Car []> {
                return this.prisma.car.findMany({
                });
        
          }
            // service which takes input data from @body and creates an object which is then saved as new data in db 
            async create(data: Prisma.CarCreateInput): Promise<Car> {
                return this.prisma.car.create({data});
             
          }

          // service which takes input data from @body aconfignd deletes a data entry from db which matches the @body mongoid value 
          async deleteOneCar(requestId: {}): Promise <Car>{
                let dataId: number = Number(requestId['id'])
                return this.prisma.car.delete({where: {id:dataId}})
          }

          async findCarById(requestId: {}){
            let dataId: number = Number(requestId['id'])
                return this.prisma.car.findUnique({where: {id:dataId}})
          }

          // service which creates a new data object from @body - then matches @body mongoid with db, and replaces existing db data for entry with new data object
          async updateOneCar(reqCarData: {}) {
            reqCarData['id'] = Number(reqCarData['id'])
            let dataId: number = reqCarData['id']
            return this.prisma.car.update({data: reqCarData, where: {id:dataId}})
      }
}
