import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignIn from '../pages/Signin'
import Home from '../pages/Home'
import SignUp from '../pages/Signup'
import Dashboard from '../pages/Dashboard'
import PrivateRoute from './PrivateRoute'

const Allroute = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<><Dashboard/></>}/>
        <Route path='/signup' element={<SignUp/>}/>
      <Route path='/signin' element={<SignIn/>}/>
    </Routes>
  )
}

export default Allroute
