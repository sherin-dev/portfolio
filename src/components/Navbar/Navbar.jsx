// import React from 'react'
import { useState } from 'react';
import logo from '../../assets/SHERIN_SHANAVAS-removebg-preview2.png'
import './Navbar.css'
// import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
import { useRef } from 'react';
const Navbar = () => {
  // const [menu,setMenu]=useState("home");
  const menuRef=useRef();

  const openMenu=()=>{
    menuRef.current.style.right="0";
  }
    const closeMenu=()=>{
    menuRef.current.style.right="-350px";
  }
  return (
    <div className='navbar'>
      <img src={logo} alt="" />
      <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open'/>
      <ul ref={menuRef} className='nav-menu'>
        <img className='nav-mob-close' src={menu_close} onClick={closeMenu} alt="" />
        {/* If you want to give underline property use the commented code below */}
        {/* {menu==="home"? <img src={underline} alt=''/>:<></> */}
        {/* {menu==="about"? <img src={underline} alt=''/>:<></>} */}
        {/* {menu==="services"? <img src={underline} alt=''/>:<></>} */}
        {/* {menu==="work"? <img src={underline} alt=''/>:<></>} */}
        {/* {menu==="contact"? <img src={underline} alt=''/>:<></>} */}
        <li><AnchorLink className='anchor-link'  href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu("services")}>Skills</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu("work")}>Portfolio</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink></li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Connect with me</p></AnchorLink>
      </div>
    </div>
    
  );
};

export default Navbar
