import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import logo from "../../assets/edusity_assets/logo.png"
import { Link } from "react-scroll"
import menu_icon from "../../assets/edusity_assets/menu-icon.png"


// for the navigation purpose , here we've used react scroll npm package
//for the installation type in the terminal following command => `npm i react-scroll` 

const Navbar = () => {

 const [sticky, setSticky] = useState(false);

 useEffect( () => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
 },[]);

 const [menu,setMenu] = useState(false);

 const toggleMenu = () => {
    menu ? setMenu(false) : setMenu(true); 
 }

  return (

    <nav className={`'container' ${sticky ? "dark-nav" : " "}`}>
        <img src={logo} alt="logo-icon" className='logo' />
        <ul className={menu ? " " : "hide-menu"}>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='program' smooth={true} offset={-260} duration={500}>Program</Link></li>
            <li><Link to='about' smooth={true} offset={-150} duration={500}>About Us</Link></li>
            <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
            <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
            <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact Us</Link></li>
        </ul>
        <img src={menu_icon} alt="menu-icon" className='menu-icon' onClick={toggleMenu}/>
    </nav>
   
  )
}

export default Navbar
