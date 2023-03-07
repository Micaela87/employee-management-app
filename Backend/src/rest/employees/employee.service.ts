import { HttpException, Inject, Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { CreateEmployeeDto, UpdateEmployeeDto } from "./dto/employee.dto";
import { Employee } from "./entity/employee.entity";
import { CreateEmployeeValidatorPipe } from "./validation.pipe";
import * as fs from 'fs';

@Injectable()
export class EmployeeService {

    constructor(
        @Inject('EMPLOYEE_REPOSITORY')
        private employeeRepository: Repository<Employee>,
        private validationPipe: CreateEmployeeValidatorPipe
    ) {}
    
    async getAllEmployees() {
        return (await this.employeeRepository.find({
        })).map((employee: Employee) => {
            return {
                id: employee.id,
                email: employee.email,
                username: employee.username,
                password: employee.password,
                first_name: employee.first_name,
                last_name: employee.last_name,
                birthdate: new Date(employee.birthdate),
                phone: employee.phone,
                contract_start_date: new Date(employee.contract_start_date),
                contract_exp_date: new Date(employee.contract_exp_date),
                profile_picture: employee.profile_picture,
            }
        });
    }

    async getEmployee(id: string) {
        return await this.employeeRepository.findOne({
            where: { id },
            relations: {
                tasks: true
            }
        });
    }

    async createEmployee(employee: CreateEmployeeDto) {

        try {

            this.validationPipe.transform(employee);

            if (employee['profile_picture']) {
                
                fs.writeFileSync('../../../../Frontend/src/assets/src' + Math.floor(Math.random() * 99999), employee['profile_picture']);
                
            }

            return await this.employeeRepository.save(employee);

        } catch (error) {

            throw new HttpException(error.message, error.status ?? 500);

        }
        
    }

    async updateEmployee(id: string, employee: UpdateEmployeeDto) {

        try {

            this.validationPipe.transform(employee);
        
            const existingEmployee = await this.employeeRepository.findOne({
                where: { id }
            });

            if (!existingEmployee) {
                throw new NotFoundException('No employee found');
            }

            for (let key in employee) {

                existingEmployee[key] = employee[key];

            }

            return await this.employeeRepository.save(existingEmployee);

        } catch(error) {

            throw new HttpException(error.message, error.status ?? 500);
        }
        
    }

    async removeEmployee(id: string) {

        try {

            return await this.employeeRepository.delete(id);

        } catch(error) {

            throw new HttpException(error.message, error.status ?? 500);
            
        }
        
        
    }
}