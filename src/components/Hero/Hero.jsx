import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark_arrow.svg'
const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Welcome to Our Website</h1>
        <p>Your journey to excellence starts here.</p>
        <button className='btn'>Explore more <img src={dark_arrow} alt="arrow" /></button>
      </div>
    </div> 
  )
}

export default Hero
