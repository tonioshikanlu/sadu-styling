import React from 'react';
import './Home.css';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <div>
                <img src="./kraak.png" alt="sadu" className="header-image" />
                <h1 className="header-text">SADU STYLING</h1>
            </div>
            <div className="home">
                <div className="experience-section">
                    <h2 className="experience-title">The Sadu Experience</h2>
                    <p className="experience-description">
                        Sadu Styling, a fashion styling company, is deeply rooted in the belief that elegance and fashion go hand in hand, especially when it comes to bridal styling. <br></br> <br></br>
                        Our vision is to create a unique and unforgettable experience for every customer, focusing on crafting elegant, stylish, and timeless looks that reflect one's personality and the essence of their spirit. 
                        We believe that fashion is more than just a trend; it's a way of expressing oneself. <br></br> <br></br>
                        At Sadu Styling, we understand that fashion is not one-size-fits-all. Each individual is unique, and so should be their style. We take pride in our ability to curate looks that not only align with the latest fashion trends but also remain timeless in their elegance. 
                        Our team of expert stylists works closely with each customer, understanding their vision, their comfort, and their dreams, and translating them into a look that is uniquely theirs and unforgettable. 
                        We believe that elegance never dates, and through our styling, we ensure that each individual feels their most elegant, confident, and beautiful self on their special day, creating memories that they will cherish forever.
                    </p>
                </div>
                <div>
                    <Testimonial></Testimonial>
                </div>
                <div className="quote-section" style={{ backgroundImage: `url('/classy.png')` }}>
                    <p className="quote-text" style={{ color: 'white' }}>I think fashion can always date, but I think if a woman has elegance, she doesn't date. - Alice Temperley</p>
                </div> 
            </div>
        </div>
    );
};

export default Home;
