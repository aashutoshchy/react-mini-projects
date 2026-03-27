import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    if (count > 0) setCount(count - 1) //only works if count is greater than 0
  }

  const reset = () => {
    setCount(0)
  }

  return (
    <>
      <div className='h-screen w-full bg-[#FBE8CE] flex items-center justify-center'>
        <div className='h-[70vh] w-[25%] bg-white rounded-xl p-4'>
          <div className='h-[50vh] w-full bg-[#E4DFB5] flex items-center justify-center rounded-3xl'>
            <p className='text-9xl text-[#62734c]'>{count}</p>
          </div>
          <div className='m-8 flex justify-between'>
            <button onClick={increment} className='h-[70px] w-[70px] bg-[#C3CC9B] rounded-2xl text-4xl text-[#62734c]'>+</button>
            <button onClick={decrement} className='h-[70px] w-[70px] bg-[#C3CC9B] rounded-2xl text-4xl text-[#62734c]'>-</button>
            <button onClick={reset} className='h-[70px] w-[100px] bg-[#C3CC9B] rounded-2xl text-2xl text-[#62734c]'>Reset</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
