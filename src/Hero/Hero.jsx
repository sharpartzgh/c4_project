/* eslint-disable no-unused-vars */
import React from 'react'
import './Hero.css'
import { NavLink } from 'react-router-dom'


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

    <main className='h-full'>
      <div className="bg-hero bg-cover bg-no-repeat sm:ml-10  sm:h-[25em] tablet:h-screen t ">
      </div>
      <div className=' px-10 min-h-screen'>
        <h1 className=' text-center font-Roboto font-black text-4xl mb-4 leading-tight'>More than just shorter links</h1>
        <p className='sm:text-[1.27em] text-center leading-9 font-bold text-gray-500 '>Build your brand recognition and get detailed insights on how your links are performing</p>
        <NavLink to='/SignIn'>Get Started</NavLink>
      </div>
    </main>
  )
}

export default Hero
