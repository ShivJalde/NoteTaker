import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../src/pages/Home/Home'
import Login from '../src/pages/Login/Login'
import Register from './pages/Register/Register'




const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/dashboard' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Register />} />
      </Routes>
    </Router>
  )
}

export default App