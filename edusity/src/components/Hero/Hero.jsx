import React from 'react'
import "./Hero.css"
import darkArrow from "../../assets/edusity_assets/dark-arrow.png"

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-texts">
        <h1>We ensure better education for a better world</h1>
        <p>Out cutting-edge curriculum is designed to power
            students with the knowledge, skills and experiences
            nedded to excel in the dynamic field of education
        </p>
         <button className='btn'>Explore More <img src={darkArrow} alt="arrow-icon" /></button>
      </div>
    </div>
  )
}

export default Hero
