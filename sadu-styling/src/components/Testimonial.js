import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css";
import { Avatar } from "@material-ui/core";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import './Testimonial.css';

const PreviousBtn = (props) => {
    console.log(props);
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <ArrowBackIos style={{ color: "gray", fontSize: "45px" }} />
      </div>
    );
  };
  const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <ArrowForwardIos style={{ color: "gray", fontSize: "45px" }} />
      </div>
    );
  };
  const Testimonial = () => {
    return (
      <div
        className="testimonial"
        style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
      >
        <div style={{ width: "50%", textAlign: "center" }}>
          <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots>
            <Card img="/isi.avif" text="My wedding was a dream come true, and a big part of that was thanks to Sadu Styling. The attention to detail, the exquisite design, and the quality of the dress were beyond my expectations. I felt like a queen on my special day. I can't thank Sadu Styling enough!" name="Isi" event="Bride '23" />
            <Card img="/deb.avif" text="Choosing Sadu Styling for my bridal dress was the best decision I made for my wedding. The team was incredibly supportive and understood my vision perfectly. The dress was a masterpiece, and I received so many compliments. I highly recommend Sadu Styling to all future brides!" name="Deb" event="Bride '23" />
            <Card img="/moyin.avif" text="Sadu is my go to at any point. When I'm in a bind and even when I'm not because I know they'll give me even better options than what I had or at the very least, give me an elevated version of what I had in mind. They stay in the know and follow literally every brand there is so they'll always have unique options at every price point to fit your budget!" name="Moyin" event="Bride '23"/>
          </Slider>
        </div>
      </div>
    );
  };
  
  const Card = ({ img, text, name, event }) => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          color: "black",
        }}
      >
        <Avatar
          imgProps={{ style: { borderRadius: "50%" } }}
          src={img}
          style={{
            width: 120,
            height: 120,
            border: "1px solid lightgray",
            padding: 7,
            marginBottom: 20,
          }}
        />
        <p>{text}</p>
        <p style={{ fontStyle: "italic", marginTop: 25 }}>
          <span style={{ fontWeight: 500, color: "green" }}>{name}</span> ,
          {event}
        </p>
      </div>
    );
  };
  
  export default Testimonial;