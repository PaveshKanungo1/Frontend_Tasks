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
    <div className="bg-gray-800 p-6 rounded-lg shadow-md w-full h-full overflow-auto border border-gray-700">
      <h2 className="text-2xl font-bold text-white mb-4">Tasks</h2>
      {tasks.length === 0 ? (
        <p className="text-gray-400 text-center">No tasks available</p>
      ) : (
        tasks.map((task) => (
          <div
            key={task.id}
            className={`p-4 mb-4 rounded-lg shadow-md ${task.completed ? 'bg-gray-700' : 'bg-gray-900 text-white'}`}
          >
            <div className="flex justify-between items-center">
              <div className={`${task.completed ? "line-through" : ""}`}>
                <h3 className="text-lg font-semibold">{task.title}</h3>
                <p className="text-sm">Due: {task.dueDate.toString()}</p>
                <p className="text-sm font-medium">Status: {task.completed ? "Completed" : "Pending"}</p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => markCompleted(task.id)}
                  className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow"
                >
                  {task.completed ? "Undo" : "Complete"}
                </button>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg shadow"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TaskContainer;
