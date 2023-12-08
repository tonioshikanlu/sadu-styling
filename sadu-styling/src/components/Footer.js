import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import './Footer.css';
const Footer = () => {
    return (
        <footer>
            <div className="follow-us">
                    <p>Follow Us</p>
                    <a href="https://www.instagram.com/sadustyling/" target="_blank" rel="noopener noreferrer">
                        <InstagramIcon />
                    </a>
                </div>
                <div className="logo">
                    <img src="/sadu-logo-2.png" alt="Sadu Logo" />
                </div>
            <div className="container">
            </div>
            <p>&copy; 2023 Oshikanlu Web Designs. All rights reserved.</p>
        </footer>
    );
};

export default Footer;