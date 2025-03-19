import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import API from './components/API'
import UseRef from './components/UseRef'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <API/> */}
      <UseRef/>
    </>
  )
}

export default App
