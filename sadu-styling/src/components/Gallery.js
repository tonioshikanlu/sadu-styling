import React, { useEffect, useRef } from 'react';
import './Gallery.css';

function Gallery() {
    const instaFeed = useRef(null);

    useEffect(() => {
        // Check if the script has already been added
        if (!document.querySelector(`script[src="${"https://widgets.sociablekit.com/instagram-feed/widget.js"}"]`)) {
            const script = document.createElement('script');
            script.src = "https://widgets.sociablekit.com/instagram-feed/widget.js";
            script.async = true;
            script.defer = true;
    
            instaFeed.current.appendChild(script);
        }
    }, []);

    return (
        <div>
            <div>
                <img src="https://images.unsplash.com/photo-1532454781337-fc3edff34f91?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODh8fHdlZGRpbmclMjBkcmVzc3xlbnwwfHwwfHx8MA%3D%3D" alt="sadu" className="gallery-header-image" />
                <h1 className="header-text">Gallery</h1>
            </div>
            
            <div className='gallery-section' ref={instaFeed}>
            <div class='sk-instagram-feed' data-embed-id='241093'></div>
            </div>
        </div>
    );
}

export default Gallery;