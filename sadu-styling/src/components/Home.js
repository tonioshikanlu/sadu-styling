import React from 'react';
import './Home.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div className="home">
        <div className="header-image">
            <h1 className="header-text">SADU STYLING</h1>
        </div>
        <div className="experience-section">
                <h2 className="experience-title">The Sadu Experience</h2>
                <p className="experience-description">
                Sadu Styling, a Nigerian bridal styling company, is deeply rooted in the belief that elegance and fashion go hand in hand, especially when it comes to bridal styling. <br></br> <br></br>
                Our vision is to create a unique and unforgettable experience for every bride, focusing on crafting elegant, stylish, and timeless looks that reflect the bride's personality and the essence of her spirit. 
                We believe that fashion is more than just a trend; it's a way of expressing oneself, and for a bride, it's a way of expressing her joy, love, and anticipation for her new journey. <br></br> <br></br>
                At Sadu Styling, we understand that bridal fashion is not one-size-fits-all. Each bride is unique, and so should be her bridal style. We take pride in our ability to create bespoke bridal looks that not only align with the latest fashion trends but also remain timeless in their elegance. 
                Our team of expert stylists works closely with each bride, understanding her vision, her comfort, and her dreams, and translating them into a bridal look that is uniquely hers and unforgettable. 
                We believe that elegance never dates, and through our styling, we ensure that each bride feels her most elegant, confident, and beautiful self on her special day, creating memories that she will cherish forever."
                </p>
            </div>
            <div>
            <Testimonial></Testimonial>
            </div>
            <div className="quote-section" style={{ backgroundImage: `url('/classy.png')` }}>
                <p className="quote-text" style={{ color: 'white' }}>I think fashion can always date, but I think if a woman has elegance, she doesn't date. - Alice Temperley</p>
            </div>
        </div>
    );
};

export default Home;
