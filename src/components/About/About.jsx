import React from 'react'
import './About.css'
import profile_img from '../../assets/Sherin_img1.png'
const About = () => {
  return (
    <div id="about" className='about'> 
      <div className="about-title">
        <h1>About Me </h1>
        {/* <img src={theme_pattern} alt="" /> */}
      </div>
      <div className="about-section">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I am an MCA graduate actively searching for front end development jobs where I can utilize and improve my skills in designing, debugging and deploying web applications created using React.js</p>
            </div>
            <div className="about-skills">
                <div className="about-skill">
                    <p>HTML & CSS</p><hr style={{width:"50%"}}/>
                </div>
                <div className="about-skill">
                    <p>Bootstrap</p><hr style={{width:"70%"}}/>
                </div>
                <div className="about-skill">
                    <p>React JS</p><hr style={{width:"60%"}}/>
                </div>
                <div className="about-skill">
                    <p>JavaScript</p><hr style={{width:"50%"}}/>
                </div>                
            </div>
        </div>
       
      </div>
       <div className="about-achievements">
            <div className="about-achievement">
                <h1>0-4</h1>
                <p>MONTHS OF EXPERIENCE</p>
            </div>
            <hr />
             <div className="about-achievement">
                <h1>4+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            {/* <hr /> */}
             
        </div>
    </div>
  )
}

export default About
