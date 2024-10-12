import { Module } from '@nestjs/common';
import { AppController, TestAppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [TestAppController],
  providers: [AppService],
})
export class AppModule {}
