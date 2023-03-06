import { ConfigService } from 'src/ConfigService';
import { Employee } from 'src/rest/employees/entity/employee.entity';
import { Task } from 'src/rest/task/entity/task.entity';
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
            schema: ConfigService.getConfigBykey("SCHEMA"),
            uuidExtension: ConfigService.getConfigBykey("UUID_EXTENSION"),
            installExtensions: ConfigService.getConfigBykey("INSTALL_EXTENSIONS"),
            database: ConfigService.getConfigBykey("DATABASE"),
            entities: [Employee, Task],
            synchronize: ConfigService.getConfigBykey("SYNCHRONIZE"),
        });
  
        return await dataSource.initialize();
      },
    },
  ];