// 1. Import the necessary libraries
import React, { useEffect, useState } from 'react';

// 2. Define the Gallery component
const Gallery = () => {
    const [photos, setPhotos] = useState([]);

    // 3. Fetch the Instagram feed using the Instagram Basic Display API
    useEffect(() => {
        const fetchInstagramFeed = async () => {
            try {
                const response = await fetch(
                    `https://graph.instagram.com/me/media?fields=media_url,permalink&access_token=YOUR_ACCESS_TOKEN`
                );
                const data = await response.json();
                setPhotos(data.data);
            } catch (error) {
                console.error('Error fetching Instagram feed:', error);
            }
        };

        fetchInstagramFeed();
    }, []);

    // 4. Render the gallery
    return (
        <div>
            <h1>Instagram Gallery</h1>
            <div className="gallery">
                {photos.map((photo) => (
                    <a href={photo.permalink} target="_blank" rel="noopener noreferrer" key={photo.id}>
                        <img src={photo.media_url} alt="Instagram Photo" />
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
