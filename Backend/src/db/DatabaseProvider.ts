import { ConfigService } from 'src/ConfigService';
import { DataSource } from 'typeorm';

export const databaseProviders = [
    {
      provide: 'DATA_SOURCE',
      useFactory: async () => {
        const dataSource = new DataSource({
            type: ConfigService.getConfigBykey("TYPE"),
            host: ConfigService.getConfigBykey("HOST"),
            port: ConfigService.getConfigBykey("PORT"),
            username: ConfigService.getConfigBykey("USERNAME"),
            password: ConfigService.getConfigBykey("PASSWORD"),
            database: ConfigService.getConfigBykey("DATABASE"),
            entities: [__dirname + "dist/**/*.entity{.ts,.js}"],
            synchronize: ConfigService.getConfigBykey("SYNCHRONIZE"),
        });
  
        return dataSource.initialize();
      },
    },
  ];