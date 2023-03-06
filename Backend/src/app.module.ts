import { Module } from '@nestjs/common';
import { DataManager } from './db/DataManager';
import { EmployeeController } from './rest/employees/employee.controller';
import { employeeProviders } from './rest/employees/employee.provider';
import { EmployeeService } from './rest/employees/employee.service';
import { CreateEmployeeValidatorPipe } from './rest/employees/validation.pipe';
import { TaskController } from './rest/task/task.controller';
import { taskProviders } from './rest/task/task.provider';
import { TaskService } from './rest/task/task.service';
import { CreateTaskValidatorPipe } from './rest/task/validationPipe';

@Module({
  imports: [DataManager],
  controllers: [TaskController, EmployeeController],
  providers: [TaskService, EmployeeService, ...employeeProviders, ...taskProviders, CreateEmployeeValidatorPipe, CreateTaskValidatorPipe],
})
export class AppModule {}
