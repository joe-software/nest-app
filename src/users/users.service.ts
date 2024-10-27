import { Injectable } from '@nestjs/common';

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
    // constructor(@InjectModel(UserDataCollection.name) private userModel: Model<UserDataCollection>){}
    constructor(){}

    // service which requests and returns all user data from db - async so doesnt stop other processes and can wait for response and promise representsa the eventual completion
    async findAll() {
    
      }
    
    // service which takes input data from @body and creates an object which is then saved as new data in db 
    async create(reqUserData) {
        let inputUserData: UserDataInterface = {
            'username': reqUserData['user-username-input'],
            'age': reqUserData['user-age-input'],
            'bio': reqUserData['user-bio-input'],
            'permission': reqUserData['user-permission-input']
        }
   
    }

    // service which takes input data from @body and deletes a data entry from db which matches the @body mongoid value 
    async deleteOneUser(requestId) {
    let deleteId: string = requestId['mongoid']
   
  }

  async updateOneUser(reqUserData){
    let putId: string = reqUserData['mongoid']
    let updateUserData: UserDataInterface = {
        'username': reqUserData['user-username-input'],
        'age': reqUserData['user-age-input'],
        'bio': reqUserData['user-bio-input'],
        'permission': reqUserData['user-permission-input']
    }
}
  }
