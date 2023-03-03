import { Module } from '@nestjs/common';
import { ConfigService } from './ConfigService';
import { DataManager } from './db/DataManager';

@Module({
  imports: [ConfigService, DataManager],
  controllers: [],
  providers: [],
})
export class AppModule {}
