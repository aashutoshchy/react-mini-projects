import { useState } from 'react'
import TaskList from './components/TaskList'

function App() {

  const [input, setInput] = useState(["Hello", "HI"])

  const addTask = () => {
    if (input.trim() == "") return;
    setInput([...task, input])
  }

  return (
    <>
      <div className='w-full h-screen bg-[#574964] flex items-center flex-col justify-center text-5xl font-bold gap-2'>
        <p className='font-[poppins] text-[#FFDAB3]'>TO DO LIST</p>
        <div className="w-1/2 bg-[#FFDAB3] flex items-center justify-around p-2 gap-2">
          <input type="text" className='outline-1 h-10 min-w-1/3' />
          <button className='bg-red-500 h-10 w-30 rounded-4xl text-xl px-2'>Add</button>
        </div>
        <div className="w-1/2 h-auto bg-[#FFDAB3]">
          <ol>
            <TaskList />

          </ol>
        </div>
      </div>
    </>
  )
}

export default App
