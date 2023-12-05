/* eslint-disable no-unused-vars */
import React from 'react'
import TitleBar from '../Header/TitleBar'
import Hero from '../Hero/Hero'
import ShortLinkSection from '../ShortLink/ShortLinkSection'
import Boost from '../Boost/Boost'
import Footer from '../Footer/Footer'

const Homepage = () => {
  return (
    <div>
      <TitleBar/>
      <Hero/>
      <ShortLinkSection />
      <Boost/>
      <Footer />
    </div>
  )
}

export default Homepage
