import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
  let [counter , setCounter]  = useState(10)
  const addValue = ()=>{
    setCounter(prev => (prev < 20 ? prev + 1 : prev));
  }
  const removevalue = ()=>{
    setCounter(prev => (prev > 0 ? prev - 1 : prev))
  }
  return (
    <>
      <h1>Hello world</h1>
      <h2>Counter Value : {counter}</h2>
      <button
      onClick={addValue}
      >increment value : {counter}</button>
      <button onClick={removevalue}>decrement value : {counter}</button>
    </>
  )
}
export default App
