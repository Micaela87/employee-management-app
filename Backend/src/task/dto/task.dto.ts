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