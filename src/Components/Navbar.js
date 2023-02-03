import React from 'react';
import { useRef } from 'react';
import {FaBars, FaTimes} from "react-icons/fa";

function Navbar() {
    const navRef = useRef();

    const showNavbar= () =>{
        navRef.current.classList.toggle("responsive_nav");
    }
  return (
    <header>
        <h3>Online Examination System</h3>
        <nav ref={navRef}>
            <a href="/#">Home</a>
            <a href="/#">Admin</a>
            <a href="/#">Teacher</a>
            <a href="/#">Student</a>
            <a href="/#">About Us</a>
            <a href="/#">Contact Us</a>
            

            <button className='nav-btn nav-close-btn ' onClick={showNavbar}>
                <FaTimes/>
            </button>
        </nav>
        <button className='nav-btn' onClick={showNavbar}>
            <FaBars/>
        </button>
        
    </header>
    
  )
}

export default Navbar