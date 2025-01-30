import { useState } from "react";
import { Task, TaskFormProps } from "../types";

const TaskForm: React.FC<TaskFormProps> = ({ tasks, setTasks }) => {
  const [title, setTitle] = useState<string>("");
  const [dueDate, setDueDate] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !dueDate) {
      alert("Please enter both title and due date");
      return;
    }

    const newTask = {
      id: tasks.length + 1,
      title,
      dueDate: new Date(dueDate),
      completed: false,
    };

    setTasks((prevTasks: Task[]) => [...prevTasks, newTask]);

    setTitle("");
    setDueDate("");
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md w-full h-full flex flex-col justify-center items-center border border-gray-700">
      <h2 className="text-2xl font-bold text-white mb-4">Add New Task</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center space-y-4 w-full"
      >
        <div className="flex flex-col w-full">
          <label className="text-white text-sm mb-1">Task Title</label>
          <input
            type="text"
            placeholder="Enter task title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="p-2 rounded-lg w-full border border-gray-600 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>

        <div className="flex flex-col w-full">
          <label className="text-white text-sm mb-1">Due Date</label>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="p-2 rounded-lg w-full border border-gray-600 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>

        <button
          type="submit"
          className="bg-amber-400 hover:bg-amber-500 text-black font-bold py-2 px-6 rounded-lg shadow-md mt-4"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
