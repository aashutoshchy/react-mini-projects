import { useState } from 'react'
import Button from './components/Button'

function App() {

  // Tried to use map method.
  // const colors = ["#8A7650", "#8E977D", "#ECE7D1", "#DBCEA5", "#9AB17A", "#C3CC9B", "#E4DFB5", "#FBE8CE", "#C5D89D", "#9CAB84"]

  const [color, setColor] = useState('#574964')

  return (
    <>
      {/* Whole Container */}
      <div className="h-screen max-w-full flex justify-center items-center flex-col" style={{ backgroundColor: color }}>
        <p className='m-4 mx-15 font-bold text-4xl text-white text-center font-["poppins"] text-shadow-black'>Background Color Changer</p>
        {/*Container for color Box*/}
        <div className="bg-[#FFDAB3] h-auto w-auto mx-15 gap-2 px-4 py-3 flex justify-around items-center flex-wrap rounded-4xl">
          <Button color="#8A7650" text="white" onClick={() => setColor("#8A7650")} />
          <Button color="#8E977D" text="white" onClick={() => setColor("#8E977D")} />
          <Button color="#ECE7D1" text="#8A7650" onClick={() => setColor("#ECE7D1")} />
          <Button color="#DBCEA5" text="#8A7650" onClick={() => setColor("#DBCEA5")} />
          <Button color="#9AB17A" text="white" onClick={() => setColor("#9AB17A")} />
          <Button color="#C3CC9B" text="white" onClick={() => setColor("#C3CC9B")} />
          <Button color="#E4DFB5" text="white" onClick={() => setColor("#E4DFB5")} />
          <Button color="#FBE8CE" text="#574964" onClick={() => setColor("#FBE8CE")} />
          <Button color="#C5D89D" text="white" onClick={() => setColor("#C5D89D")} />
          <Button color="#9CAB84" text="white" onClick={() => setColor("#9CAB84")} />
        </div>
      </div >
    </>
  )
}

export default App
