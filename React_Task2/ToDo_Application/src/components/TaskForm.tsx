import { useState } from "react"
import {Task, TaskFormProps } from "../types"

const TaskForm: React.FC<TaskFormProps> = ({tasks, setTasks}) => {

    const [title, setTitle] = useState<string>("");
    const [dueDate, setDueDate] = useState<string>("");

    const handleSubmit = (e: React.FormEvent) => {
       e.preventDefault(); 

       if(!title || !dueDate){
            alert("Please enter both title and dueDate");
            return;
       }

       const newTask = {
            id: tasks.length + 1,
            title,
            dueDate: new Date(dueDate),
            completed: false
       };

       setTasks((prevTasks: Task[]) => [...prevTasks, newTask]);

       setTitle("");
       setDueDate("");
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="flex justify-center items-center">
                <label>Task: </label>
                <input type="text" placeholder="Task Title" value={title} onChange={(e) => setTitle(e.target.value)}></input>

                <label>DueDate: </label>
                <input type="date" placeholder="DueDate" value={dueDate} onChange={(e) => setDueDate(e.target.value)}></input>

                <button type="submit" className="bg-amber-300 text-black text-center rounded-2xl font-bold w-30">Add Task</button>
            </form>

        </div>
    )
}

export default TaskForm;