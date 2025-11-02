import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll'; 

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
                <li> <Link to='hero' smooth={true} offset={0}  duration={500}>Home</Link> </li>
                <li> <Link to='programs' smooth={true} offset={-260}  duration={500}>Program</Link> </li>
                <li> <Link to='about' smooth={true} offset={-150}  duration={500}>About Us</Link> </li>
                <li> <Link to='cafe' smooth={true} offset={-260}  duration={500}>café environment</Link> </li>
                <li> <Link to='contact' smooth={true} offset={-260}  duration={500}> <button className="btn">Contact Us</button></Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
