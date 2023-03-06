import { Employee } from "src/rest/employees/entity/employee.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('tasks')
export class Task {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title: string;
	
    @Column()
    difficulty: number;
	
    @Column('timestamp')
    start_date: string;
	
    @Column('timestamp')
    end_date: string;

    @Column('timestamp')
    ext_date: string;
	
    @Column('text', { nullable: true })
    comments: string;
	
    @ManyToOne(() => Employee, (employee) => employee.tasks, { nullable: false })
    @JoinColumn({ name: 'employeeId' })
    employee: Employee;
}