import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';import { ConfigModule } from '@nestjs/config';
import {PrismaService} from '../prisma.service'

const dotenv = require('dotenv');
dotenv.config();
const uri = process.env.DBSTRING

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [UsersController],
  providers: [UsersService, PrismaService]
})
export class UsersModule {}
