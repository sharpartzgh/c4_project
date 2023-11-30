/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './TitleBar.css'
import { NavLink } from 'react-router-dom'


/* eslint-disable no-unused-vars */
const TitleBar = () => {
  
  // using js to work on the hover effect since am struggling with the css method
  const [isfeature, setState] = useState(false);
  const [isPricing, setPricing] = useState(false);
  const [isResources, setResources] = useState(false);
  const [isLogin, setLogin] = useState(false);

  const LinkStyle = {
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: 'bold',
  };

  // I know this is funny but please am still learning, had to resolve to this since was finding it difficult ...lol
  const feature = {
    color: isfeature ? 'black' : 'gray',
  }
 const handleMouseEnter = () =>{
    setState(true)
  }
  const handleMouseLeave = () => {
    setState(false);
  };

  const Pricing = {
    color: isPricing ? 'black' : 'gray',
  }
  const PricingMouseEnter = () =>{
    setPricing(true)
  }
  const PricingMouseLeave = () => {
    setPricing(false);
  };

  const Resources = {
    color: isResources ? 'black' : 'gray',
  }
  const ResourcesMouseEnter = () =>{
    setResources(true)
  }
  const ResourcesMouseLeave = () => {
    setResources(false);
  };

  const Login = {
    color: isLogin ? 'black' : 'gray',
  }
  const LoginMouseEnter = () =>{
    isLogin(true)
  }
  const LoginMouseLeave = () => {
    setLogin(false);
  };



  const SignUp = {
    textDecoration: 'none',
    color: 'white',
    fontSize: '18px',
    fontWeight: 'bold',
    borderRadius: '25px',
    backgroundColor: '#2ACFCF',
    width: '100px',
    padding: '5px',
    textAlign: 'center',
  }
  

  return (
   <header>
      <div className="header-container">
        <div className="logo-container">
            <nav className='firstcontainer'>
              <h1>Shortly</h1>
              <ul>
              <NavLink to='/' style={{...LinkStyle, ...feature}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >Features</NavLink>
                <NavLink to='/'  style={{...LinkStyle, ...Pricing}} onMouseEnter={PricingMouseEnter} onMouseLeave={PricingMouseLeave} >Pricing</NavLink>
                <NavLink to='/'  style={{...LinkStyle, ...Resources}} onMouseEnter={ResourcesMouseEnter} onMouseLeave={ResourcesMouseLeave}>Resources</NavLink>
              </ul>
            </nav> 
            <div className='btn'>
              <ul> 
              <NavLink to='/SignIn' style={{...LinkStyle, ...Login}} onMouseEnter={LoginMouseEnter} onMouseLeave={LoginMouseLeave} >Login</NavLink>
                <NavLink to='/SignUp' style={SignUp}>Sign Up</NavLink>
              </ul>
            </div>
        </div> 
      </div>
   </header>
  )
}

export default TitleBar
