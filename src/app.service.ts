import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getCarData(): string {
    return 'Hello World!';
  }

}
