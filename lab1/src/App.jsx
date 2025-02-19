import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import BaiTap1 from './components/BaiTap1'
import BaiTap2 from './components/BaiTap2'
import BaiTap3 from './components/BaiTap3'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h2>Nguyễn Đức Anh_22712781</h2>
    <BaiTap1/>
     {/* <BaiTap2/> */}
    {/* <BaiTap3/> */}
    </>
  )
}

export default App
