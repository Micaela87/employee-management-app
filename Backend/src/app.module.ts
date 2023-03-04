import { Module } from '@nestjs/common';
import { DataManager } from './db/DataManager';
import { EmployeeController } from './employees/employee.controller';
import { employeeProviders } from './employees/employee.provider';
import { EmployeeService } from './employees/employee.service';
import { TaskController } from './task/task.controller';
import { taskProviders } from './task/task.provider';
import { TaskService } from './task/task.service';

@Module({
  imports: [DataManager],
  controllers: [TaskController, EmployeeController],
  providers: [TaskService, EmployeeService, ...employeeProviders, ...taskProviders],
})
export class AppModule {}
