import { TaskContainerProps } from "../types";

const TaskContainer: React.FC<TaskContainerProps> = ({ tasks, setTasks }) => {
  const deleteTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const markCompleted = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div>
      {/* now we need to put all tasks on the frontend */}
      {/* we are using map for that */}
    
      { tasks.map((task) => (
        <div key={task.id}>
            <div className={`flex ${task.completed ? 'line-through text-gray-500' : ''}`}>
                <h3>{task.title}</h3>
                <p>Due: {task.dueDate.toString()}</p>
                <p>Status: {task.completed ? "Completed" : "Pending"}</p>
            </div>

            <div>
                <button onClick={() => markCompleted(task.id)}>
                    {task.completed ? "Undo" : "Completed?"}
                </button>
            </div>

            <div>
                <button onClick={() => deleteTask(task.id)}>
                    Delete
                </button>
            </div>
        </div>
      ))}
    
    </div>
  );
};

export default TaskContainer;
