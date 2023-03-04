import { Employee } from "src/employees/entity/employee.entity";
import { Column, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

export class Task {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title: string;
	
    @Column()
    difficulty: number;
	
    @Column('date')
    start_date: string;
	
    @Column('date')
    end_date: string;
	
    @Column('text')
    comments: string;
	
    @ManyToOne(() => Employee, (employee) => employee.tasks)
    employee: Employee;
}