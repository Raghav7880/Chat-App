import React from 'react'
import './Login.css'
import assets from '../../assets/assets'

const login = () => {
  return (
    <div className='login'>
      <img src={assets.logo_big} alt="" className="logo" />
      <form  className="login-form">
        <h2>Sign Up</h2>
        <input type="text" placeholder='username' className="form-input" required/>
        <input type="email" placeholder='Email' className="form-input" />
        <input type="password" placeholder='Password' className="form-input" />
      </form>
    </div>
  )
}

export default login
