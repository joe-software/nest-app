import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController} from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CarDataCollection, CarSchema } from './schemas/car.schema';

const dotenv = require('dotenv');
dotenv.config();
const uri = process.env.DBSTRING

@Module({
  imports: [ConfigModule.forRoot(), MongooseModule.forRoot(uri), MongooseModule.forFeature([{name: CarDataCollection.name, schema: CarSchema}])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
