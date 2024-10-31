import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { User, Car, Prisma } from '@prisma/client';

// create interface to be used when creating user data objects from request data
interface UserDataInterface {
    'username': string; 
    'age': number;
    'bio': string; 
    'permission': string;
    'mongoid'? : string
}

@Injectable()
export class UsersService {
  
    constructor(private prisma: PrismaService){}

    // service which requests and returns all user data from db - async so doesnt stop other processes and can wait for response and promise representsa the eventual completion
    async findAll(): Promise<User []> {
      return this.prisma.user.findMany({
      });
      }
    
    // service which takes input data from @body and creates an object which is then saved as new data in db 
    async create(data: Prisma.UserCreateInput) {
      data['age'] = Number(data['age'])
      return this.prisma.user.create({data});
   
    }

    // service which takes input data from @body and deletes a data entry from db which matches the @body mongoid value 
    async deleteOneUser(requestId): Promise<User>{
      let dataId: number = Number(requestId['id'])
      return this.prisma.user.delete({where: {id:dataId}})
  }

  async updateOneUser(reqUserData){
      reqUserData['id'] = Number(reqUserData['id'])
      reqUserData['age'] = Number(reqUserData['age'])
      let dataId: number = reqUserData['id']
      return this.prisma.user.update({data: reqUserData, where: {id:dataId}})
}

async findUserById(requestId: {}){
      let dataId: number = Number(requestId['id'])
      return this.prisma.user.findUnique({where: {id:dataId}})
}
  }
