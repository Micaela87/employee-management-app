import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { CreateEmployeeDto, UpdateEmployeeDto } from "./dto/employee.dto";
import { Employee } from "./entity/employee.entity";

@Injectable()
export class EmployeeService {

    constructor(
        @Inject('EMPLOYEE_REPOSITORY')
        private employeeRepository: Repository<Employee>
    ) {}
    
    getAllEmployees() {
        this.employeeRepository.find();
    }

    getEmployee(email: string) {
        this.employeeRepository.find({
            where: { email }
        });
    }

    createEmployee(employee: CreateEmployeeDto) {
        this.employeeRepository.save(employee);
    }

    updateEmployee(email: string, employee: UpdateEmployeeDto) {
        
        this.employeeRepository.findOne({
            where: { email }
        });

        this.employeeRepository.save(employee);
    }

    removeEmployee(email: string) {

        this.employeeRepository.delete(email);
    }
}