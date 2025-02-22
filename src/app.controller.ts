import { Controller, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import {
  ClientKafka,
  EventPattern,
  MessagePattern,
  Payload,
} from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @MessagePattern('signup')
  public async signup(@Payload() payload: any) {
    console.log('Member-service: signup, MessagePattern');
    const response = { status: 'success', message: 'User signup processed' };

    return response;
  }

  @EventPattern('notifications')
  public async sendNotifications(@Payload() payload: any) {
    console.log('Member-service: sendNotifications, notificationsPattern');
    const response = {
      status: 'success',
      message: 'User sendNotifications processed',
    };

    return response;
  }
}
