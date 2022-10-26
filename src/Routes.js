import React from 'react'
import User from './User'
import Home from './Home'
import ErrorPage from './ErrorPage'
import "./index.css"
import { Routes, Route,Link } from 'react-router-dom'


const NavRoutes = () => {
    return (

        < >
      
        <nav className='nav'>
            <ul>
            <li> <Link to="/">HOME</Link> </li>
            <li> <Link to="user" > USER </Link> </li>
        
            </ul>
        </nav>
           
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='user' element={<User />} />
               <Route path='*' element={<ErrorPage />} />
            </Routes>
        
        
        </>


    )
}

export default NavRoutes