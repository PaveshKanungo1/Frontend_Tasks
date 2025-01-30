import { useState } from 'react';
import './App.css';
import TaskContainer from './components/TaskContainer';
import TaskForm from './components/TaskForm';
import { Task } from './types';

function App() {

  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <div id='container' className='bg-black w-screen h-screen flex-col justify-center items-center p-10'>
      <div className='bg-amber-300 rounded h-10 w-50 m-auto flex justify-center items-center'>
      <div id='name' className='text-black font-bold text-center'>TODO APP</div>
      </div>
      <div id='InputOutputContainer' className='flex justify-center items-center text-white py-30'>
        <div id='TaskContainer' className='w-[70%] h-full'>
          <TaskContainer tasks={tasks} setTasks={setTasks}/>
        </div>
        <div id='TaskForm' className='h-full'>
          <TaskForm tasks={tasks} setTasks={setTasks}/>
        </div>
      </div>
    </div>
  )
}

export default App
