import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UserDataCollection } from 'src/users/schemas/user.schema';

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
    // include mongoose/schema information within class
    constructor(@InjectModel(UserDataCollection.name) private userModel: Model<UserDataCollection>){}

    // service which requests and returns all user data from db - async so doesnt stop other processes and can wait for response and promise representsa the eventual completion
    async findAll(): Promise<UserDataCollection[]> {
        return this.userModel.find().exec();
    
      }
    
    // service which takes input data from @body and creates an object which is then saved as new data in db 
    async create(reqUserData): Promise<UserDataCollection> {
        let inputUserData: UserDataInterface = {
            'username': reqUserData['user-username-input'],
            'age': reqUserData['user-age-input'],
            'bio': reqUserData['user-bio-input'],
            'permission': reqUserData['user-permission-input']
        }
        const createdUser = new this.userModel(inputUserData);
        return createdUser.save();
    }
  }
