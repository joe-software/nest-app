import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserDataCollection, UserSchema } from 'src/users/schemas/user.schema';

const dotenv = require('dotenv');
dotenv.config();
const uri = process.env.DBSTRING

@Module({
  imports: [ConfigModule.forRoot(), MongooseModule.forRoot(uri), MongooseModule.forFeature([{name: UserDataCollection.name, schema: UserSchema}])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
