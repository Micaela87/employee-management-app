import { Column, PrimaryGeneratedColumn } from "typeorm";

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
	
}