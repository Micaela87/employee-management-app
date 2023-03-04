export class CreateEmployeeDto {
    email: string;
    username: string;
    password: string;
    first_name: string;
    last_name: string;
    birthdate: string;
    phone: string;
    contract_start_date: string;
    contract_exp_date: string;
}

export class UpdateEmployeeDto {
    email: string;
    username: string;
    password: string;
    first_name: string;
    last_name: string;
    birthdate: string;
    phone: string;
    contract_start_date: string;
    contract_exp_date: string;    
}