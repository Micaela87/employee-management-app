import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { CreateTaskDto, UpdateTaskDto } from "./dto/task.dto";
import { TaskService } from "./task.service";

@Controller('users')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  create(@Body() createUserDto: CreateTaskDto) {
    // return this.employeeService.create(createUserDto);
  }

  @Get()
  findAll() {
    // return this.employeeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    // return this.employeeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateTaskDto) {
    // return this.employeeService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    // return this.employeeService.remove(+id);
  }
}