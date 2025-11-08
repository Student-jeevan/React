import { useState } from 'react'
function App() {
  const [color , setColor] = useState("olive")

  return (
     <div className="w-full h-screen duration-200" style={{backgroundColor : color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl'>
          <button style={{backgroundColor : "blue"}} className='px-4 py-2 bg-blue-500 text-white rounded-md' onClick={()=> setColor("blue")} >Blue</button>
          <button style={{backgroundColor : "green"}}  className='px-4 py-2 bg-blue-500 text-white rounded-md' onClick={()=> setColor("green")}>green</button>
          <button style={{backgroundColor : "red"}} className='px-4 py-2 bg-blue-500 text-white rounded-md' onClick={()=> setColor("red")}>red</button>
          <button style={{backgroundColor : "black"}} className='px-4 py-2 bg-blue-500 text-white rounded-md' onClick={()=> setColor("black")}>black</button>
          <button style={{backgroundColor : "yellow"}} className='px-4 py-2 bg-blue-500 text-white rounded-md' onClick={()=> setColor("yellow")}>yellow</button>
        </div>
      </div>
     </div>
  )
}

export default App
