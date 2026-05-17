import React from 'react'
import Login from './login'
import Signin from './Signin'
import { Routes, Route } from 'react-router-dom';
import { DataProvider } from './Datacontext';
import Signinblock from './Signinblock';
import Dashboard from '../scenes/dasboard/Dashboard';
import ProtectedRoute from './ProtectedRoute';

const Register = () => {
  return (
    <div>
      <DataProvider>
        <Routes>
        <Route path='/signin' element={<Signinblock><Signin /></Signinblock> }/>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<ProtectedRoute><Dashboard /></ProtectedRoute>}/>
      </Routes>
      </DataProvider>
    </div>
  )
}

export default Register