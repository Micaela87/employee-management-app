export type Task = {
    id: string;
    title: string;
    difficulty: number;
    start_date: Date;
    end_date: Date;
    ext_date: Date;
    comments?: string;
}