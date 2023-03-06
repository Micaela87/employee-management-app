import { Employee } from "src/rest/employees/entity/employee.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('tasks')
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

    @Column('date')
    ext_date: string;
	
    @Column('text')
    comments: string;
	
    @ManyToOne(() => Employee, (employee) => employee.tasks, { nullable: false })
    employee: Employee;
}