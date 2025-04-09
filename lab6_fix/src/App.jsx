import { useState } from 'react'
import './App.css'
import Layout from './components/Layout'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path="/*" element={<Layout />} />
    </Routes>
  </Router>
  )
}

export default App