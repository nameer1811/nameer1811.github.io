import React from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineUser, AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi'
// import {RiServiceLine} from 'react-icons/ri'
import { useState } from 'react'


const Nav = () => {
  
  const [activeNav, setActiveNav] = useState('#home')
  // const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 0 && window.scrollY <= 600){
      setActiveNav('#home');
     }
     else if(window.scrollY >= 600 && window.scrollY <= 1200){
      setActiveNav('#about');
     }
     else if(window.scrollY >= 1200 && window.scrollY <= 1800){
      setActiveNav('#experience');
     }
    //  else if(window.scrollY >= 1800 && window.scrollY <= 2400){
    //   setActiveNav('#expertise');
    //  }
     else if(window.scrollY >= 1800 && window.scrollY <= 2400){
      setActiveNav('#projects');
     }
     else if(window.scrollY >= 2400){
      setActiveNav('#contact');
     }
  };
  window.addEventListener('scroll', changeNavbarColor);
  
  return (
    <nav>
      <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook/></a>
      {/* <a href="#expertise" onClick={() => setActiveNav('#expertise')} className={activeNav === '#expertise' ? 'active' : ''}><RiServiceLine/></a> */}
      <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><AiOutlineFundProjectionScreen/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav