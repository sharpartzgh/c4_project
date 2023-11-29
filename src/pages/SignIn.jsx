/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import image from '../assets/images/Frame.png'
import { FiArrowLeft } from "react-icons/fi";
import { NavLink } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className='contianer'>
      <div className="main-data">
          {/* the back arrow section */}
        <div className='arrow-div'>
            <FiArrowLeft className='leftarrow' style={{color:'#BFBFBF'}}/>
            <NavLink to='/SignIn' style={{color:'#000', textDecoration:'none', fontWeight:'600'}}>Back</NavLink>
        </div>
        {/* the main form section container and it contents */}
        <div className="top-text">
          <h1>Login</h1>
          <p>Get started with Shortly</p>
        </div>
          <form action="data" className='container-data'>
            <label htmlFor="email">Email:
            <br />
              <input type="email" name='email' />
            </label>
            <br />
            <label htmlFor="password">Password:
            <br />
              <input type="password" name='password' />
            </label>
            <br />
            {/* bottom text */}
            <NavLink to='/ForgotPassword' className='forgot'>forgot password ?</NavLink>
            {/* login Button */}
            <br />
            <button type="submit">Login</button>
          </form>
        <div className="bottom-text">
        <p className='bottom-text'>Don't have an account yet?</p> <NavLink to='/SignUp' className='signUp'>Sign Up</NavLink>
        </div>
      </div>
       {/* image section */}
       <div className='inner'>
          <img src={image} alt="cover-image" />
        </div>
    </div>
  )
}

export default SignIn
