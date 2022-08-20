import React from 'react'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import UserDetails from './components/UserDetails'
import {Routes,Route} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => {
  return (
    <div>
     



      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/signup' element={<Signup/>} />
        <Route exact path='/userdetails' element={  <UserDetails/>}/>
      </Routes>

     
      
    </div>
  )
}

export default App
