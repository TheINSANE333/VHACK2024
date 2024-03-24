import "./EducationCarousel.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Subscription from "./subscription.tsx";
import React from "react";
import {subData, responsive} from "./data.js";

const EducationCarousel = () => {
  const subscription_cards = subData.map((item) => (
    <Subscription 
      id={item.id} 
      img={item.img} 
      card_text={item.card_text} 
      card_title={item.card_title} 
      button_text={item.button_text}
    />
  ))
  return (
    <div style={{animation: "fadeInAnimation ease 2s", animationIterationCount: "1",animationFillMode: "forwards"}}>
    <h1 className = "big-title">Education</h1>
    <div style={{ borderRadius: "20px", border: '10px solid purple', paddingBottom:'2vh', marginTop: '2vh', marginLeft: '5vw', paddingLeft: '2vw'}}>
      <h1>Subscribe to Finance Education Contents!</h1>
      <hr></hr>
      <br></br>
      <div style={{ maxWidth: "85vw", margin: "0" }}>
        <Carousel showDots={true} responsive={responsive}>{subscription_cards}</Carousel>
      </div>
    </div>
    </div>
  );
};

export default EducationCarousel;
