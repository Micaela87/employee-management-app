import { Module } from '@nestjs/common';
import { DataManager } from 'src/db/DataManager';
import { EmployeeController } from './employee.controller';
import { employeeProviders } from './employee.provider';
import { EmployeeService } from './employee.service';

@Module({
  imports: [DataManager],
  controllers: [EmployeeController],
  providers: [EmployeeService, ...employeeProviders],
})
export class EmployeeModule {}