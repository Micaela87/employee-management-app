import { HttpException, Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Employee } from "../employees/entity/employee.entity";
import { CreateTaskDto, UpdateTaskDto } from "./dto/task.dto";
import { Task } from "./entity/task.entity";
import { CreateTaskValidatorPipe } from "./validationPipe";

@Injectable()
export class TaskService {
    
    constructor(
        @Inject('TASK_REPOSITORY')
        private taskRepository: Repository<Task>,
        @Inject('EMPLOYEE_REPOSITORY')
        private employeeRepository: Repository<Employee>,
        private validationPipe: CreateTaskValidatorPipe
    ) {}

    async createTask(task: CreateTaskDto) {

        try {

            this.validationPipe.transform(task);

            const employee: Employee = await this.employeeRepository.findOne({
                where: { id: task.employeeId }
            });

            const newTask = new Task();

            for (let key in task) {
                newTask[key] = task[key];
            }

            newTask.employee = employee;

            return await this.taskRepository.save(newTask);

        } catch(error) {

            throw new HttpException(error.message, error.status ?? 500);

        }
        
    }

    async updateTask(id: string, task: UpdateTaskDto) {

        try {

            this.validationPipe.transform(task);

            const [existingTask] = await this.taskRepository.find({
                where: { id }
            });

            const employee: Employee = await this.employeeRepository.findOne({
                where: { id: task.employeeId }
            });

            for (let key in task) {
                existingTask[key] = task[key];
            }

            existingTask.employee = employee;

            return await this.taskRepository.save(existingTask);

        } catch(error) {

            throw new HttpException(error.message, error.status ?? 500);

        }
    }

    async getAllTasks() {

        try {

            return await this.taskRepository.find({
                relations: {
                    employee: true
                }
            });

        } catch(error) {

            throw new HttpException(error.message, error.status ?? 500);

        }
    }

    async getTask(id: string) {

        try {

            return await this.taskRepository.find({
                where: { id },
                relations: {
                    employee: true
                }
            });

        } catch(error) {

            throw new HttpException(error.message, error.status ?? 500);

        }
    }

    async deleteTask(id: string) {

        try {

             return await this.taskRepository.delete(id);

        } catch(error) {

            throw new HttpException(error.message, error.status ?? 500);

        }
    }
}