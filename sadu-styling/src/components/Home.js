import React from 'react';

const Home = () => {
    return (
        <div>
            <h1>Welcome to our Bridal Styling Website!</h1>
            <p>Discover the perfect bridal look for your special day.</p>
            <img src="bridal-image.jpg" alt="Bridal Styling" />
            <p>Explore our collection of stunning bridal dresses, accessories, and more.</p>
            <button>View Collection</button>

            <h2>Testimonials</h2>
            <div className="testimonials">
                <div className="testimonial">
                    <p>"I found my dream wedding dress at Sadu Styling. The quality and design were exceptional!"</p>
                    <p>- Emily</p>
                </div>
                <div className="testimonial">
                    <p>"The team at Sadu Styling made my bridal shopping experience unforgettable. Highly recommended!"</p>
                    <p>- Sarah</p>
                </div>
                <div className="testimonial">
                    <p>"I couldn't be happier with my bridal accessories from Sadu Styling. They completed my look perfectly!"</p>
                    <p>- Jessica</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
