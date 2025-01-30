
import { useState } from 'react';
import './App.css';
import TaskContainer from './components/TaskContainer';
import TaskForm from './components/TaskForm';
import { Task } from './types';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <div
      id='container'
      className='bg-gradient-to-br from-gray-900 to-gray-700 w-screen h-screen flex flex-col justify-center items-center p-10'
    >
      <div className='bg-amber-400 shadow-lg rounded-lg h-14 w-60 flex justify-center items-center mb-8 border-2 border-amber-500'>
        <div id='name' className='text-black font-extrabold text-xl tracking-wide'>
          TODO APP
        </div>
      </div>
      <div
        id='InputOutputContainer'
        className='flex justify-center items-start text-white py-10 bg-gray-800 rounded-lg shadow-xl w-[80%] h-[70%] border border-gray-600'
      >
        <div id='TaskContainer' className='w-[60%] h-full p-6'>
          <TaskContainer tasks={tasks} setTasks={setTasks} />
        </div>
        <div
          id='TaskForm'
          className='w-[40%] h-full p-6 border-l border-gray-600 flex justify-center items-center bg-gray-700 rounded-r-lg'
        >
          <TaskForm tasks={tasks} setTasks={setTasks} />
        </div>
      </div>
    </div>
  );
}

export default App;