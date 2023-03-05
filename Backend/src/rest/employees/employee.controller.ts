import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { CreateEmployeeDto, UpdateEmployeeDto } from "./dto/employee.dto";
import { EmployeeService } from "./employee.service";

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  create(@Body() createUserDto: CreateEmployeeDto) {
    return this.employeeService.createEmployee(createUserDto);
  }

  @Get()
  findAll() {
    return this.employeeService.getAllEmployees();
  }

  @Get(':email')
  findOne(@Param('email') email: string) {
    return this.employeeService.getEmployee(email);
  }

  @Patch(':email')
  update(@Param('email') email: string, @Body() updateUserDto: UpdateEmployeeDto) {
    return this.employeeService.updateEmployee(email, updateUserDto);
  }

  @Delete(':email')
  remove(@Param('email') email: string) {
    return this.employeeService.removeEmployee(email);
  }
}