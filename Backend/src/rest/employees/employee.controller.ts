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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeeService.getEmployee(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateEmployeeDto) {
    return this.employeeService.updateEmployee(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeeService.removeEmployee(id);
  }
}