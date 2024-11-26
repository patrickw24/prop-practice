import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter, Routes, Route } from "react-router-dom"
import { Navbar } from './Components/Navbar'
import { Home } from './ScreenComponents/Home'

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element= {<Home/>} > </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
