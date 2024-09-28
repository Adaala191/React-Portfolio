import React from 'react'
import './Hero.css'
import Abdalla from '../../Images/Abdalla.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Abdalla_resume from '../../assets/Abdalla_resume.pdf'

const Hero = () => {
  return (
    <div id='home' className='hero'>
     <img src={Abdalla} alt="" />
     <h1><span>I'm Abdalla Abdalla,</span> software developer based in Canada. </h1>
     <p>I’m a software development student at Centennial College in Toronto, Canada. </p>
     <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume"> <a href={Abdalla_resume} download="Abdalla_Resume.pdf" className='resume-link'>My resume</a></div>
     </div>
    </div>
  )
}

export default Hero