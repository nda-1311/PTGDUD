import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReduxTangGiam from './components/Redux/ReduxTangGiam'
import UseReducer from './components/UseReducer/UseReducer'
import TangGiam from './components/ReduxToolkit/TangGiam'

function App() {



  return (
    <>
      {/* <UseReducer/> */}


      {/* <div className='App'>
        <ReduxTangGiam/>
    </div> */}


      <div>
        <h1>Redux Toolkit Counter</h1>
        <TangGiam />
      </div>
    </>


  )
}

export default App
