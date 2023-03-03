import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from 'src/ConfigService';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: ConfigService.getConfigBykey("TYPE"),
      host: ConfigService.getConfigBykey("HOST"),
      port: ConfigService.getConfigBykey("PORT"),
      username: ConfigService.getConfigBykey("USERNAME"),
      password: ConfigService.getConfigBykey("PASSWORD"),
      database: ConfigService.getConfigBykey("DATABASE"),
      entities: [ConfigService.getConfigBykey("ENTITIES")],
      synchronize: ConfigService.getConfigBykey("SYNCHRONIZE"),
    }),
  ],
})
export class DataManager {}