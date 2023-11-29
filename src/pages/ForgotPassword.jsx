/* eslint-disable no-unused-vars */
import React from 'react'
import { NavLink } from 'react-router-dom'
import image from '../assets/images/Frame.png'
import { FiArrowLeft } from "react-icons/fi";

const ForgotPassword = () => {
  return (
    <div>
       <div className='contianer'>
      <div className="main-data">
     
        {/* the main form section container and it contents */}
        <div className="top-text forgot-text">
          <h1>Forgot Password</h1>
          <p>Enter the email address you used when you joined <br />
           and we’ll send you instructions to reset your password</p>
        </div>
          <form action="data" className='container-data'>
            <label htmlFor="email">Email:
            <br />
              <input type="email" name='email' />
            </label>
            {/* Send Recovery Button */}
            <br />
            <button type="submit">Send recovery code</button>
          </form>
        <div className="bottom-text text3">
        <FiArrowLeft className='leftarrow' style={{color:'#BFBFBF'}}/>
        <NavLink to='/SignIn' className='Back2'>Back to sign in</NavLink>
        </div>
      </div>
       {/* image section */}
       <div className='inner'>
          <img src={image} alt="cover-image" />
        </div>
    </div>
    </div>
  )
}

export default ForgotPassword
