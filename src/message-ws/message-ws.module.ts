import { Module } from '@nestjs/common';
import { MessageWsService } from './message-ws.service';
import { MessageWsGateway } from './message-ws.gateway';
import { AuthModule } from '../auth/auth.module';
import { Repository } from 'typeorm';

@Module({
  providers: [MessageWsGateway, MessageWsService, Repository],
  imports: [AuthModule],
})
export class MessageWsModule {}
