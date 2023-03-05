import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { taskProviders } from './task.provider';
import { TaskService } from './task.service';
import { CreateTaskValidatorPipe } from './validationPipe';

@Module({
  controllers: [TaskController],
  providers: [TaskService, ...taskProviders, CreateTaskValidatorPipe],
})
export class TaskModule {}