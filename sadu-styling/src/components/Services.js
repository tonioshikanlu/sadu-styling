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
            <div className="experience-section">
            <h2 className="experience-title">The Sadu Styling Packages</h2>
                <Pricing />
            </div>
        </div>
    );
}

export default Services;
