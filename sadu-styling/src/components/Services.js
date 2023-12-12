import React from 'react';
import './Services.css';
import Pricing from './Pricing';

function Services() {
    return (
        <div>
            <div>
                <img src="./rings.png" alt="sadu" className="header-image" />
                <h1 className="header-text">Services</h1>
            </div>
            <div className="services-section">
                <div className="services-title">
                    <h2>The Sadu Styling Packages</h2>
                <p className='services-title-content'> All pakcages come with the following: </p>
                <ul className="services-list">
                    <li>Mood Board Creation</li>
                    <li>Vendor Sourcing</li>
                    <li>Assistance with outfit selection, accessories, and overall styling</li>
                </ul>
                <a href="./Sadustyling-Pricing.pdf" download className="download-button">See Full Brochure</a>
                </div>
                
                <Pricing />
            </div>
        </div>
    );
}

export default Services;