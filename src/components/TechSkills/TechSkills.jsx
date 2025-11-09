import React from 'react'
import './TechSkills.css'
import TechSkills_Data from '../../assets/techskills'
const TechSkills = () => {
  return (
    <div className='services'>
        <div className="services-title">
            <h1>Technical Skills</h1>
            {/* <img src={theme_pattern} alt="" /> */}
        </div>
        <div className="services-container">
            {TechSkills_Data.map((service,index)=>{
                return <div key={index} className='services-format'>
                    {/* <h3>{service.s_no}</h3> */}
                    <h2>{service.s_name}</h2>
                    {/* <p>{service.s_desc}</p> */}
                    {/* <div className="services-readmode">
                        <p>Read More</p>
                        <img src={arrow_icon} alt=""  />
                    </div> */}
                </div>
            })}
        </div>
    </div>
  )
}

export default TechSkills
