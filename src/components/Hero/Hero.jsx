import React from 'react'
import './Hero.css'
import profile_img from '../../assets/sherin_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {

  const handleResumeDownload=()=>{
    const link=document.createElement("a");
    link.href='/Sherin_Resume(React.js).pdf';
    link.download='Sherin_Shanavas_resume.pdf';
    link.click();
  };

  return (
    <div id="home" className='hero'>
      <img src={profile_img} alt=""  />
      <h1><span>I'm Sherin Shanavas </span>, frontend developer(React.js)</h1>
      <p>I am an MCA graduate actively searching for front end development jobs where I can utilize and improve my skills in designing, debugging and deploying web applications created using React.js</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}></p>Connect with me</AnchorLink></div>
        <div className="hero-resume" onClick={handleResumeDownload}>My resume</div>
      </div>
    </div>
  )
}

export default Hero
