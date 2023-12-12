import React, { useEffect, useRef } from 'react';
import './Gallery.css';

function Gallery() {
    const instaFeed = useRef(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://www.juicer.io/embed/toni_0sh/embed-code.js";
        script.async = true;
        script.defer = true;

        instaFeed.current.appendChild(script);
    }, []);

    return (
        <div>
            <div>
                <img src="https://images.unsplash.com/photo-1587467512961-120760940315?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="sadu" className="gallery-header-image" />
                <h1 className="header-text">Gallery</h1>
            </div>
            
            <div className='gallery-section' ref={instaFeed}>
                <figure data-behold-id="ztQsLU97BhINDr8NBXYs"></figure>
            </div>
        </div>
    );
}

export default Gallery;