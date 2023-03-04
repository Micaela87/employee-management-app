import { Module } from '@nestjs/common';
import { ConfigService } from './ConfigService';
import { DataManager } from './db/DataManager';
import { EmployeeController } from './employees/employee.controller';
import { EmployeeService } from './employees/employee.service';
import { TaskController } from './task/task.controller';
import { TaskService } from './task/task.service';

@Module({
  imports: [ConfigService, DataManager],
  controllers: [TaskController, EmployeeController],
  providers: [TaskService, EmployeeService],
})
export class AppModule {}
