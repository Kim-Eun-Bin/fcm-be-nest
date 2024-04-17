import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FcmModule } from '@fcm/fcm.module';

@Module({
  imports: [FcmModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
