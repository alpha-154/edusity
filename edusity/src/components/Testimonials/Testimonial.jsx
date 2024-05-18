import React, { useRef } from 'react'
import "./Testimonial.css"
import next_icon from "../../assets/edusity_assets/next-icon.png"
import back_icon from "../../assets/edusity_assets/back-icon.png"
import user_1 from "../../assets/edusity_assets/user-1.png"
import user_2 from "../../assets/edusity_assets/user-2.png"
import user_3 from "../../assets/edusity_assets/user-3.png"
import user_4 from "../../assets/edusity_assets/user-4.png"



const Testimonial = () => {

  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
      if(tx > -50){
        tx -= 25;
      }
      slider.current.style.transform = `translateX(${tx}%)`;
  }

  const slideBackward = () => {
     if(tx < 0){
       tx += 25;
     }
     slider.current.style.transform = `translateX(${tx}%)`;
    }


  return (

    <div className='testimonials'>
       <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
       <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>

       <div className="slider">

          <ul ref={slider}>
             <li>
                <div className="slide">
                  <div className="user-info">
                      <img src={user_1} />
                      <div>
                         <h3>William Jackson</h3>
                         <span>Edusity, USA</span>
                      </div>
                  </div>
                  <p>
                    Choosing to pursue my degree at Edusity university was one of
                    the best decision I've ever made. The supportive community, state-of-the art 
                    community 
                  </p>
                </div>
             </li>

             <li>
                <div className="slide">
                  <div className="user-info">
                      <img src={user_2} />
                      <div>
                         <h3>William Jackson</h3>
                         <span>Edusity, USA</span>
                      </div>
                  </div>
                  <p>
                    Choosing to pursue my degree at Edusity university was one of
                    the best decision I've ever made. The supportive community, state-of-the art 
                    community 
                  </p>
                </div>
             </li>

             <li>
                <div className="slide">
                  <div className="user-info">
                      <img src={user_3} />
                      <div>
                         <h3>William Jackson</h3>
                         <span>Edusity, USA</span>
                      </div>
                  </div>
                  <p>
                    Choosing to pursue my degree at Edusity university was one of
                    the best decision I've ever made. The supportive community, state-of-the art 
                    community 
                  </p>
                </div>
             </li>

             <li>
                <div className="slide">
                  <div className="user-info">
                      <img src={user_4} />
                      <div>
                         <h3>William Jackson</h3>
                         <span>Edusity, USA</span>
                      </div>
                  </div>
                  <p>
                    Choosing to pursue my degree at Edusity university was one of
                    the best decision I've ever made. The supportive community, state-of-the art 
                    community 
                  </p>
                </div>
             </li>

          </ul>

        </div>

    </div>

  )
}

export default Testimonial
