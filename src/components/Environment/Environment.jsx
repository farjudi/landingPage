import React from 'react'
import './Environment.css'
import gallery1 from '../../assets/gallery1.jpg'
import gallery2 from '../../assets/gallery2.jpg'
import gallery3 from '../../assets/gallery3.jpg'
import gallery4 from '../../assets/gallery4.jpg'
import white_arrow from '../../assets/white-arrow.svg'
 
const Environment = () => {
  return (
    <div className='environment'>
      <div className="gallery">
        <img src={gallery1} alt="gallery" />
        <img src={gallery2} alt="gallery" />
        <img src={gallery3} alt="gallery" />
        <img src={gallery4} alt="gallery" />
      </div>
      <button className='btn dark-btn'>see more here <img src={white_arrow} alt="" /> </button>
    </div>
  )
}

export default Environment
