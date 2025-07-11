import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignUpPage from '../pages/Auth/SignUpPage'

const AuthRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/signup'  element={<SignUpPage/>}/>
      </Routes>
    </div>
  )
}

export default AuthRoutes