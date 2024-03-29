import * as Joi from 'joi';

export class CreateEmployeeDto {
    email: string;
    username: string;
    password: string;
    first_name: string;
    last_name: string;
    birthdate?: string;
    phone?: string;
    contract_start_date: string;
    contract_exp_date: string;
    profile_picture?: string;
}

export class UpdateEmployeeDto {
    id: string;
    email: string;
    username: string;
    password: string;
    first_name: string;
    last_name: string;
    birthdate?: string;
    phone?: string;
    contract_start_date: string;
    contract_exp_date: string;
    profile_picture?: string;    
}

export const EmployeeSchema = Joi.object({

    id: Joi.string(),
    email: Joi.string().email().required(),
    username: Joi.string().required(),
    password: Joi.string().required(),
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    birthdate: Joi.date(),
    phone: Joi.string(),
    contract_start_date: Joi.date().required(),
    contract_exp_date: Joi.date().required(),
    profile_picture: Joi.string()

}).options({
  abortEarly: false,
});