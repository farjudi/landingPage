import React from 'react'
import './About.css'
import about_img from '../../assets/about.jpg'
import play_icon from '../../assets/paly-icon.png'
const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img' />
        <img src={play_icon} alt="play"  className='play-icon'/>
        </div>   
      <div className="about-right">
        <h3>ABOUT COFFEE</h3>
        <h2>
            Enjoy Your Coffee & Healthy Life Style
        </h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
             Necessitatibus eaque deserunt sit eius mollitia natus,
              magnam dolorum dolor praesentium placeat odit iure eum maxime inventore?
               Iure animi quod sed ut!</p>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                 Numquam, consequuntur. Libero, maxime. Excepturi distinctio assumenda,
                 quaerat tenetur natus laborum quas?</p>

               
        </div>   
    </div>
  )
}

export default About
