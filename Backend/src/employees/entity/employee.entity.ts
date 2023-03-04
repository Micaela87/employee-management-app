import { Task } from "src/task/entity/task.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Table } from "typeorm";

@Entity('employees')
export class Employee {

    @PrimaryGeneratedColumn('uuid')
    email: string;

    @Column()
    username: string;
	
    @Column()
    password: string;
	
    @Column()
    first_name: string;
	
    @Column()
    last_name: string;
	
    @Column('date')
    birthdate: string;
	
    @Column()
    phone: string;
	
    @Column('date')
    contract_start_date: string;

    @Column('date')
    contract_exp_date: string;

    @OneToMany(() => Task, (task) => task.employee)
    tasks: Task[]
}