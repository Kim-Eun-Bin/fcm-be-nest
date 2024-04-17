import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { FcmService } from '@fcm/fcm.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly fcmService: FcmService,
  ) {}

  @Post()
  async sendNoti(
    @Body() body: { token: string; title: string; message: string },
  ) {
    return await this.fcmService.sendMessage(
      body.token,
      body.title,
      body.message,
    );
  }
}
