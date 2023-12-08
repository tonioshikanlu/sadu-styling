import React from 'react';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
    return (
      <div className="navbar">
        <a href="/">
            <img src="/sadu-logo.png" alt="Logo" className="navbar-logo" />
        </a>
        <div className="navbar-links">
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/gallery">Gallery</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    );
  };
  
  export default Navbar;