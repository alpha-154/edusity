import React from 'react'
import "./About.css"
import about_img from "../../assets/edusity_assets/about.png"
import play_icon from "../../assets/edusity_assets/play-icon.png"

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="about-image" className='about-img' />
        <img src={play_icon} alt="playIcon-image" className='play-icon' onClick={()=>{
          setPlayState(true);
        }}/>
      </div>
      <div className="about-right">
        <h3>About University</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>Embark on a transformative educational journey with
           our University's comprehensive education programs. Our 
           cutting-edge curriculum is designed to empower students with
           knowledge, skills, and experience needed to excel in the dynamic
           field of education.
        </p>
         <p>With a focus on innovation, hands-on learning and personalized
            mentorship , our programs prepare aspiring educators to make a 
            meaningful impace in classrooms, schools and communities.
         </p>
         <p>Whether you aspire to be a teacher, administrator couselor, or 
            educational leader, our diverse range of programs offers the perfect 
            pathaway to achieve your goals and unlock your full potential in shaping 
            the future of education.
         </p>
      </div>
    </div>
  )
}

export default About
