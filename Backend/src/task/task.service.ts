import { HttpException, Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { CreateTaskDto, UpdateTaskDto } from "./dto/task.dto";
import { Task } from "./entity/task.entity";
import { TaskValidatorPipe } from "./validationPipe";

@Injectable()
export class TaskService {
    
    constructor(
        @Inject('TASK_REPOSITORY')
        private taskRepository: Repository<Task>,
        private validationPipe: TaskValidatorPipe
    ) {}

    async createTask(task: CreateTaskDto) {

        try {

            this.validationPipe.transform(task);

            return await this.taskRepository.save(task);

        } catch(error) {

            throw new HttpException(error.message, error.status ?? 500);

        }
        
    }

    async updateTask(id: string, task: UpdateTaskDto) {

        try {

            this.validationPipe.transform(task);

            const existingTask = await this.taskRepository.find({
                where: { id }
            });

            for (let key in task) {
                existingTask[key] = task[key];
            }

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