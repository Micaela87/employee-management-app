import { PipeTransform, BadRequestException } from '@nestjs/common';

import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';

import { TaskSchema } from './dto/task.dto';

export class TaskValidatorPipe implements PipeTransform<CreateTaskDto, UpdateTaskDto> {

  public transform(value: CreateTaskDto | UpdateTaskDto): CreateTaskDto | UpdateTaskDto {

    const result = TaskSchema.validate(value);

    if (result.error) {
      const errorMessages = result.error.details.map((d) => d.message).join();
      throw new BadRequestException(errorMessages);
    }
    return value;
  }
}