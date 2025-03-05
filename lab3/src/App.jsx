import { useState } from 'react'
import './App.css'
import Bai1 from '../src/components/Bai1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Bai1/>
    </>
  )
}

export default App
