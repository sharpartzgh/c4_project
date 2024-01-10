/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { MdMenu, MdClose } from "react-icons/md";




/* eslint-disable no-unused-vars */
const TitleBar = () => {
  
 
  const [isfeature, setState] = useState(false);
  const [isPricing, setPricing] = useState(false);
  const [isResources, setResources] = useState(false);
  const [isLogin, setLogin] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

//display menu on mobile when clicked
const handleMenu = () => {
  setMenuOpen(!isMenuOpen);
};

  const LinkStyle = {
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: 'bold',
  };

  // I know this is funny but please am still learning, had to resolve to this since was finding it difficult ...lol
  // after everything will rework on this using tailwindcss so take note
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




  return (
    <header className="m-auto w-full flex justify-between py-4 px-10 sm:m-auto items-center relative">
    <div className="flex items-center gap-10">
      <h1 className="text-[30px] font-extrabold">Shortly</h1>
      <nav className={`desktop-menu sm:hidden ${isMenuOpen ? 'hidden' : ''}`}>
        <ul className="sm:hidden flex gap-5">
          <NavLink to="/" style={{ ...LinkStyle, ...feature }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            Features
          </NavLink>
          <NavLink to="/" style={{ ...LinkStyle, ...Pricing }} onMouseEnter={PricingMouseEnter} onMouseLeave={PricingMouseLeave}>
            Pricing
          </NavLink>
          <NavLink to="/" style={{ ...LinkStyle, ...Resources }} onMouseEnter={ResourcesMouseEnter} onMouseLeave={ResourcesMouseLeave}>
            Resources
          </NavLink>
        </ul>
      </nav>
    </div>
    <div>
      <ul className="flex gap-3 items-center sm:hidden">
        <NavLink to="/SignIn" style={{ ...LinkStyle, ...Login }} onMouseEnter={LoginMouseEnter} onMouseLeave={LoginMouseLeave}>
          Login
        </NavLink>
        <NavLink to="/SignUp" className="bg-[#2ACFCF] font-bold rounded-3xl py-1 px-5 text-white">
          Sign Up
        </NavLink>
      </ul>
    </div>
    <div className="tablet:hidden">
       <MdMenu onClick={handleMenu} className="text-gray-400 w-8 h-16 cursor-pointer" />
    </div>
    <div className={`mobile-menu ${isMenuOpen ? 'absolute' : 'hidden'} top-20 left-0 right-0  bg-[#3A3053] px-10 py-4 m-auto w-[80%] rounded-md  tablet:hidden`}>
      <nav>
        <ul className="flex flex-col gap-3 items-center font-bold text-white  py-5 px-2">
          <NavLink to="/">Features</NavLink>
          <NavLink to="/">Pricing</NavLink>
          <NavLink to="/">Resources</NavLink>
          <hr className="w-full" />
          <NavLink to="/SignIn">Login</NavLink>
          <NavLink to="/" className="bg-[#2ACFCF] text-center font-bold rounded-3xl py-1 px-5 w-full text-white">
            Sign Up
          </NavLink>
        </ul>
      </nav>
    </div>
  </header>
  )
}

export default TitleBar
