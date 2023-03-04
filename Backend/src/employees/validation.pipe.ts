import { PipeTransform, BadRequestException } from '@nestjs/common';

import { CreateEmployeeDto } from './dto/employee.dto';

import { EmployeeSchema } from './dto/employee.dto';

export class CreateEmployeeValidatorPipe implements PipeTransform<CreateEmployeeDto> {

  public transform(value: CreateEmployeeDto): CreateEmployeeDto {

    const result = EmployeeSchema.validate(value);

    if (result.error) {
      const errorMessages = result.error.details.map((d) => d.message).join();
      throw new BadRequestException(errorMessages);
    }
    return value;
  }
}