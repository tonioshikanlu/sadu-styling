import React, { useEffect, useRef } from 'react';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
    const navbarRef = useRef(null);

    useEffect(() => {
        const checkScroll = () => {
            if (window.scrollY > window.innerHeight * 0.75) {
                navbarRef.current.classList.add('hidden');
            } else {
                navbarRef.current.classList.remove('hidden');
            }
        };

        window.addEventListener('scroll', checkScroll);

        // Cleanup function to remove the event listener
        return () => window.removeEventListener('scroll', checkScroll);
    }, []);

    return (
        <div className="navbar" ref={navbarRef}>
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