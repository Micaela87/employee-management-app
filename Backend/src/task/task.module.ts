import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { taskProviders } from './task.provider';
import { TaskService } from './task.service';

@Module({
  controllers: [TaskController],
  providers: [TaskService, ...taskProviders],
})
export class TaskModule {}