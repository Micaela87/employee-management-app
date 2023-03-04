import * as Joi from 'joi';

export class CreateTaskDto {
    id: string;
    title: string;
    difficulty: number;
    start_date: string;
    end_date: string;
    comments: string;
}

export class UpdateTaskDto {
    title: string;
    difficulty: number;
    start_date: string;
    end_date: string;
    comments: string;    
}

export const TaskSchema = Joi.object({

    id: Joi.string(),
    title: Joi.string().required(),
    difficulty: Joi.number().required(),
    start_date: Joi.date().required(),
    end_date: Joi.date().required(),
    comments: Joi.string()

}).options({
  abortEarly: false,
});