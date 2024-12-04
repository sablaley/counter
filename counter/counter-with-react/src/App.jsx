import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const addCount = () => {
    if (count >= 0) {
      setCount(count + 1)
    }
  }
  const subCount = () => {
    if (count < 10) {
      setCount(count - 1)
    }
  }
  return (
    <>
      <h1>Count is {count} </h1>
      <button onClick={addCount}>+</button>
      <button onClick={subCount}>-</button>
    </>
  )
}

export default App
