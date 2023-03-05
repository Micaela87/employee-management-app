import { HttpException, Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { CreateEmployeeDto, UpdateEmployeeDto } from "./dto/employee.dto";
import { Employee } from "./entity/employee.entity";
import { CreateEmployeeValidatorPipe } from "./validation.pipe";

@Injectable()
export class EmployeeService {

    constructor(
        @Inject('EMPLOYEE_REPOSITORY')
        private employeeRepository: Repository<Employee>,
        private validationPipe: CreateEmployeeValidatorPipe
    ) {}
    
    async getAllEmployees() {
        return await this.employeeRepository.find({
            relations: {
                tasks: true
            }
        });
    }

    async getEmployee(email: string) {
        return await this.employeeRepository.find({
            where: { email },
            relations: {
                tasks: true
            }
        });
    }

    async createEmployee(employee: CreateEmployeeDto) {

        try {

            this.validationPipe.transform(employee);

            return await this.employeeRepository.save(employee);

        } catch (error) {

            throw new HttpException(error.message, error.status ?? 500);

        }
        
    }

    async updateEmployee(email: string, employee: UpdateEmployeeDto) {

        try {

            this.validationPipe.transform(employee);
        
            const existingEmployee = await this.employeeRepository.findOne({
                where: { email }
            });

            for (let key in employee) {

                existingEmployee[key] = employee[key];

            }

            return await this.employeeRepository.save(existingEmployee);

        } catch(error) {

            throw new HttpException(error.message, error.status ?? 500);
        }
        
    }

    async removeEmployee(email: string) {

        try {

            return await this.employeeRepository.delete(email);

        } catch(error) {

            throw new HttpException(error.message, error.status ?? 500);
            
        }
        
        
    }
}