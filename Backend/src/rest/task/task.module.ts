import { Module } from '@nestjs/common';
import { employeeProviders } from '../employees/employee.provider';
import { TaskController } from './task.controller';
import { taskProviders } from './task.provider';
import { TaskService } from './task.service';
import { CreateTaskValidatorPipe } from './validationPipe';

@Module({
  controllers: [TaskController],
  providers: [TaskService, ...taskProviders, ...employeeProviders, CreateTaskValidatorPipe],
})
export class TaskModule {}