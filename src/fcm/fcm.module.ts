import { Module } from '@nestjs/common';
import { FcmService } from '@fcm/fcm.service';

@Module({
  imports: [],
  controllers: [],
  providers: [FcmService],
  exports: [FcmService],
})
export class FcmModule {}
