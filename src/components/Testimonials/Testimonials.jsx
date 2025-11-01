import React, { useRef } from 'react';
import './Testimonials.css'
import next_icon from '../../assets/next-icon.svg'
import back_icon from '../../assets/back-icon.svg'
  import user_1 from '../../assets/user-1.jpg'
 import user_2 from '../../assets/user-2.jpg'
 import user_3 from '../../assets/user-3.jpg'
 import user_4 from '../../assets/user-4.jpg'
const Testimonials = () => {

    const slider=useRef(); 
    let tx=0;


    const slideForWard = () =>
      {
        if(tx >-50){
          tx-=25;
        }
        slider.current.style.transform=`translateX(${tx}%)`;

      } 

   const slideBackWard = () =>
    {
      if(tx < 0){
          tx+=25;
        }
        slider.current.style.transform=`translateX(${tx}%)`;
    }



  return (
    <div  className='testimonials'>
      <img src={next_icon} alt="" className='next-btn'  onClick={slideForWard}/>
      <img src={back_icon} alt="" className='back-btn'  onClick={slideBackWard} />
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                    <img src={user_1} alt="" />
                    <div>
                        <h3>Fatemeh Farjudi</h3>
                        <span>IRAN</span>
                    </div>
                    </div>
                   <p>Lorem ipsum dolor sit, 
                    amet consectetur adipisicing elit.
                     Rerum dolorum quae quis dolores officia qui,
                      eum sit velit, harum omnis debitis. 
                    Unde perferendis libero iste sunt, ab quam est dicta.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                    <img src={user_2} alt="" />
                    <div>
                        <h3>Fatemeh Farjudi</h3>
                        <span>IRAN</span>
                    </div>
                    </div>
                   <p>Lorem ipsum dolor sit, 
                    amet consectetur adipisicing elit.
                     Rerum dolorum quae quis dolores officia qui,
                      eum sit velit, harum omnis debitis. 
                    Unde perferendis libero iste sunt, ab quam est dicta.</p>
                </div>
            </li>
            
              <li>
                <div className="slide">
                    <div className="user-info">
                    <img src={user_3} alt="" />
                    <div>
                        <h3>Fatemeh Farjudi</h3>
                        <span>IRAN</span>
                    </div>
                    </div>
                   <p>Lorem ipsum dolor sit, 
                    amet consectetur adipisicing elit.
                     Rerum dolorum quae quis dolores officia qui,
                      eum sit velit, harum omnis debitis. 
                    Unde perferendis libero iste sunt, ab quam est dicta.</p>
                </div>
            </li>

       <li>
                <div className="slide">
                    <div className="user-info">
                    <img src={user_4} alt="" />
                    <div>
                        <h3>Fatemeh Farjudi</h3>
                        <span>IRAN</span>
                    </div>
                    </div>
                   <p>Lorem ipsum dolor sit, 
                    amet consectetur adipisicing elit.
                     Rerum dolorum quae quis dolores officia qui,
                      eum sit velit, harum omnis debitis. 
                    Unde perferendis libero iste sunt, ab quam est dicta.</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
