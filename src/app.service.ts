import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  public async signup(payload: any) {
    console.log('Member-service: service');
    return payload + ' returned';
  }
}
