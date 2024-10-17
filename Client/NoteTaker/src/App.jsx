import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../src/pages/Home/Home'
import Login from '../src/pages/Login/Login'
import SignUp from '../src/pages/SignUp/SignUp'
import { SnackbarProvider, useSnackbar } from 'notistack';


const routes = <Router>
  <Routes>
    <Route path='/dashboard' element={<Home />}/>
    <Route path='/login' element={<Login />}/>
    <Route path='/signup' element={<SignUp />}/>
  </Routes>
</Router>

const App = () => {
  return (
    <div>{routes}</div>
  )
}

export default App