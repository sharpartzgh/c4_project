/* eslint-disable no-unused-vars */
import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-div">

          <div className='footer-logo'>
             <h1>Shortly</h1>
          </div>

      <div className='logo-wrapper'>

          <div className="features-div">
              <h2>Features</h2>
              <div className='list-style'>
                <Link className='Link'>Link Shortening</Link>
                <Link className='Link'>Branded Links</Link>
                <Link className='Link'>Analytics</Link>
              </div>
          </div>

          <div className="features-div">
              <h2>Resources</h2>
              <div className='list-style'>
                <Link className='Link'>Blog</Link>
                <Link className='Link'>Developers</Link>
                <Link className='Link'>Support</Link>
              </div>
          </div>

          <div className="features-div">
              <h2>Company</h2>
              <div className='list-style'>
                <Link className='Link'>About</Link>
                <Link className='Link'>Our Team</Link>
                <Link className='Link'>Careers</Link>
                <Link className='Link'>Contact</Link>
              </div>
          </div>

      </div>

      <div className="sm-div"  >
      <FaFacebookSquare className='sm'/>
      <FaTwitter  className='sm'/>
      <FaPinterest className='sm'/>
      <FaInstagram className='sm'/>
      </div>
        
  </div>
  )
}

export default Footer
