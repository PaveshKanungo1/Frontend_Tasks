
export type Task = {
    id: number,
    title: string,
    dueDate: Date,
    completed: boolean
};

export type TaskContainerProps = {
    tasks: Task[],
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

export type TaskFormProps = {
    tasks: Task[],
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}