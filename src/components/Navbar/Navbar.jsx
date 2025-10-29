import React, { useState, useEffect } from 'react';
 import logo from "../../assets/logo.png";
import './Navbar.css';


const Navbar = () => {
      const[sticky,setSticky]=useState(false);
      useEffect(() =>
      {
        window.addEventListener("scroll", () => {
        window.scrollY > 500 ? setSticky(true) : setSticky(false);
        })
         },[]);



    return (
    
        <nav className= {`container ${sticky ? 'dark-nav':''}`}>
            <img src={logo} alt="Logo" className="logo" />
            <ul>
                <li>Home</li>
                <li>Program</li>
                <li>About Us</li>
                <li>café environment</li>
                <li><button className="btn">Contact Us</button></li>
            </ul>
        </nav>
    );
};

export default Navbar;
