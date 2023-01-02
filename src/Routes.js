import React from 'react'
import { Route, Routes } from 'react-router'
import Login from './Signin'
import Signup from './Signup'

const Nav = () => {
  return (
   <>
   <Routes>
    <Route path='/' element={<Signup/>} />
    <Route path='/login' element={<Login/>} />
    <Route path="/user" element={<Login />} />
   </Routes>

   </>
    
   
  )
}

export default Nav