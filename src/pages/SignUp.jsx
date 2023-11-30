/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import image from '../assets/images/Frame.png'
import { FiArrowLeft } from "react-icons/fi";
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SignUp = () => {
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
        <h1>Sign Up</h1>
        <p>Get started with Shortly</p>
      </div>
        <form action="data" className='container-data'>
          {/* this div houses the entire section of the first name and the last name inputs. */}
          <div className="name-section">
            <div className="firstname">
              <label htmlFor="name">First name:
              <br />
              <input type="name" name='name' />
              </label>
            </div>
            <div className="lastname">
              <label htmlFor="name">Last name:
                <br />
                <input type="name" name='name' />
              </label>
            </div>
          </div>
          <br />
          <div className="password">
            <div className="initialPassword">
              <label htmlFor="password">Password:
                <br />
                <input type="password" name='password' />
              </label>
            </div>
            <div className="confirmPassword">
              <label htmlFor="password">Confirm Password:
                <br />
                <input type="password" name='password' />
              </label>
            </div>
          </div>
          
          {/* login Button */}
          <button type="submit">Login</button>
        </form>
      <div className="bottom-text">
      <p className='bottom-text'>Already have an account yet?</p> <Link to='/SignIn' className='signUp'>Sign in</Link>
      </div>
    </div>
     {/* image section */}
     <div className='inner'>
        <img src={image} alt="cover-image" />
      </div>
  </div>
  )
}

export default SignUp
