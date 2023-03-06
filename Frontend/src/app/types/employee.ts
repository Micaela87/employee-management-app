import { Task } from './task';

export type Employee = {
    id: string,
    email: string;
    username: string;
    password: string;
    first_name: string;
    last_name: string;
    birthdate?: Date;
    phone?: string;
    contract_start_date: Date;
    contract_exp_date: Date;
    tasks: Task[]
}
