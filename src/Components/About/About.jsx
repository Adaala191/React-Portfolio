import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Abdalla2 from '../../Images/Abdalla2.jpg'


const About = () => {
  return (
    <div id= 'about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
        <img src={theme_pattern} alt='' />
    </div>
    <div className="about-sections">
        <div className="about-left">
            <img src={Abdalla2} alt="Profile" />
    </div>
    <div className="about-right">
        <div className="about-para">
            <p>As a dedicated software development student at Centennial College in Toronto, I have gained a solid foundation in programming languages such as Java, Python, and C++.
            Through hands-on projects and collaborative teamwork, I've developed skills in software design, debugging, and version control. My coursework has equipped me with a 
            strong understanding of algorithms, data structures, and web development frameworksI thrive in problem-solving environments and am eager to apply
            my knowledge to real-world applications, continually seeking opportunities to expand my expertise and contribute to innovative projects.</p>
            
        </div>
        <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p><hr style={{width: "90%"}} /></div>
            <div className="about-skill"><p>React JS  </p><hr style={{width: "60%"}} /></div>
            <div className="about-skill"><p>JavaScript</p><hr style={{width: "60%"}} /></div>
            <div className="about-skill"><p>Python, C# & Java</p><hr style={{width: "100%"}} /></div>
            <div className="about-skill"><p>SQL </p><hr style={{width: "60%"}} /></div>
            

        </div>
    </div>
    </div>
    <div className="about-achievements">
        <div className="about-achievement">
            <h1>2+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>90+</h1>
            <p>PROJECTS COMPLETED</p>
    </div>
    <hr />
    <div className="about-achievement">
            <h1>20+</h1>
            <p>HAPPY CLIENTS</p>
    </div>
    </div>
    </div>
  )
}

export default About