import React from "react";
// import logo from "../../assets/logo.png";
import './Navbar.css';

const Navbar = () => {
    return (
    
        <nav>
            {/* <img src={logo} alt="Logo" /> */}
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <h2>welcome to my pages </h2>
        </nav>
    );
};

export default Navbar;
