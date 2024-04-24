import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Page from './pages/Page'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min.js'

function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/p' element={<Page />} />
      </Routes>
    </div>
  )
}

export default App
