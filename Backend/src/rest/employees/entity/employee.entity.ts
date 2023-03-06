import { Task } from "src/rest/task/entity/task.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('employee')
export class Employee {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    email: string;

    @Column()
    username: string;
	
    @Column()
    password: string;
	
    @Column()
    first_name: string;
	
    @Column()
    last_name: string;
	
    @Column('date', { nullable: true })
    birthdate: string;
	
    @Column({ nullable: true })
    phone: string;
	
    @Column('date')
    contract_start_date: string;

    @Column('date')
    contract_exp_date: string;

    @OneToMany(() => Task, (task) => task.employee, { nullable: true })
    tasks: Task[]
}