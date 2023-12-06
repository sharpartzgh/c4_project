/* eslint-disable no-unused-vars */
import React from 'react'
import './Advanced.css'
import brandrecog from '../assets/images/icon-brand-recognition.svg'
import branddetailed from '../assets/images/icon-detailed-records.svg'
import brandfully from '../assets/images/icon-fully-customizable.svg'

const AdvacedStats = () => {
  return (
    <section className="Ads-section">
    <div className="advanced-container">
      <div className="ad-stats-text">
        <h1>Advanced Statistics</h1>
        <p>
          Track how your links are performing across the web with <br /> our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="ad-stats-cards">
        <div className="recognition-card">
          <span className="card-img">
            <img src={brandrecog} alt="brand recognition icon" />
          </span>
          <h4>Brand Recognition</h4>
          <p>
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your
            content.
          </p>
        </div>
        <div className="records-card">
          <span className="card-img">
            <img src={branddetailed} alt="detailed-records" />
          </span>
          <h4>Detailed Records</h4>
          <p>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better
            decisions.
          </p>
        </div>
        <div className="customizable-card">
          <span className="card-img">
            <img src={brandfully} alt="fully customizable icon" />
          </span>
          <h4>Fully Customizable</h4>
          <p>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default AdvacedStats
