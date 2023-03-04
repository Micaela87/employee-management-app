import { Module } from '@nestjs/common';
import { DataManager } from './db/DataManager';
import { EmployeeController } from './employees/employee.controller';
import { employeeProviders } from './employees/employee.provider';
import { EmployeeService } from './employees/employee.service';
import { CreateEmployeeValidatorPipe } from './employees/validation.pipe';
import { TaskController } from './task/task.controller';
import { taskProviders } from './task/task.provider';
import { TaskService } from './task/task.service';
import { CreateTaskValidatorPipe } from './task/validationPipe';

@Module({
  imports: [DataManager],
  controllers: [TaskController, EmployeeController],
  providers: [TaskService, EmployeeService, ...employeeProviders, ...taskProviders, CreateEmployeeValidatorPipe, CreateTaskValidatorPipe],
})
export class AppModule {}
