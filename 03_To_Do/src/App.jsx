import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  const [tasks, setTasks] = useState([])
  const [task, setTask] = useState("");

  function handleChange(e) {
    setTask(e.target.value);
  }

  function addTask() {
    setTasks(t => [...t, task]);
    setTask("");
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((e, i) => i != index)
    setTasks(updatedTasks)
  }

  return (
    <>
      <div className='h-screen w-full bg-[#F3E4C9] flex-wrap'>
        <header className='h-20 w-full flex justify-center items-center'>
          <h1 className='font-["Poppins"] m-20 text-4xl font-medium'>To Do List App</h1>
        </header>
        <main className='w-full h-max flex flex-col gap-10 items-center justify-center py-10'>
          <div id='input-field' className='w-1/3 flex items-center justify-between'>
            <input value={task} onChange={handleChange} type="text" placeholder='Enter Your Task' className='w-[83%] border-[#A98B76] border-2 rounded-[5px] bg-[#F3E4C9] outline-none p-2' />
            <button onClick={addTask} className='border-[#A98B76] border-2 rounded-[5px] bg-[#BFA28C] py-2 px-5'>Add</button>
          </div>
          <div className='todos w-full'>
            <ol className='w-1/3 m-auto'>
              {
                tasks.map((task, index) =>
                  <li key={index} className='flex justify-between text-[#7d6351] my-4'>{task}<button onClick={() => deleteTask(index)}><i className="fa-solid fa-trash"></i></button></li>
                )
              }
            </ol>
          </div>
        </main>
      </div >
    </>
  )
}

export default App