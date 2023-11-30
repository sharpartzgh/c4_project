/* eslint-disable no-unused-vars */
import React from 'react'
import './Hero.css'
import { NavLink } from 'react-router-dom'
import heroDivImage from '../assets/images/illustration-working.svg'

const Hero = () => {
  
  const SignUp = {
    textDecoration: 'none',
    color: 'white',
    fontSize: '20px',
    fontWeight: 'bold',
    borderRadius: '50px',
    backgroundColor: '#2ACFCF',
    padding: '20px',
    textAlign: 'center',
    cursor:'pointer'
  }
  
  return (
    <div className='hero'>
      <div className="first-div">
        <h1>More than just <br />shorter links</h1>
        <p>Build your brand recognition and get detailed <br /> insights on how your links are performing</p>
          <NavLink to='/SignIn' style={SignUp}>Get Started</NavLink>
      </div>
      <div className="second-div">
      <img src={heroDivImage} alt="working-image" />
      </div>
    </div>
  )
}

export default Hero
