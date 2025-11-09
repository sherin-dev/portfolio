import React from 'react'
import './Contact.css'
// import theme_pattern from '../../assets/theme_pattern.svg,'
import location_icon from '../../assets/location_icon.svg'
import mail_icon from '../../assets/mail_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
   const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "250e2455-6bc9-4182-b5d2-cadc519c7d8e");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };
  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        {/* <img src={theme_pattern} alt="" /> */}
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's talk</h1>
            <p>Seeking developer opportunities to apply my academic knowledge and technical skills in real-world projects. Open to connect if my profile matches your requirements.</p>
            <div className="contact-details">
                <div className="contact-detail">
                    <img src={mail_icon} alt="" /><p>sherinshanavas807@gmail.com</p>
                </div>
                <div className="contact-detail">
                    <img src={call_icon} alt="" /><p>8078728291</p>
                </div>
                <div className="contact-detail">
                    <img src={location_icon} alt=""/><p>Haleena Manzil, Krishnapuram , Perunguzhi PO, Chirayinkeezhu, Thiruvananthapuram</p>
                </div>
            </div>
        </div>
        <form onSubmit={onSubmit} className='contact-right'>
            <label htmlFor=''>Your Name:</label>
            <input type="text" placeholder='Enter your name' name='name' />
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder='Enter your email' name='email'/>
            <label>Write your message here:</label>
            <textarea name='message' rows="5" placeholder='Enter your message'></textarea>
            <button className='contact-submit' type='submit'>
                Submit now
            </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
