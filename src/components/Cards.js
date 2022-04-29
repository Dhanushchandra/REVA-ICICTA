import React from "react";
import "./style/Cards.css";
import Fade from 'react-reveal/Fade';
import Slide from "react-reveal/Fade";
import Shyama from "./assets/images/photos/REV08629.jpg"




export const MainCard = () => {
  return(
    <div className="container">
     <Slide right>
        <h1>OUR PATRONS</h1>
      </Slide>
      <div className="row">
        <div className="col-md-4 ">
      <div className="card">
        <img src={Shyama} alt="Loading..." />
        <div className="details">
          <h2>Dr. P. Shyama Raju</h2>
          <h3>Ho'ble Chancellor</h3>
          <p>CHIEF PATRON</p>
        </div>
        </div>
        </div>
      </div>
    </div>
  )
}


const Cards = (props) => {
  return (
    <div className="col-md-4">
     <Fade bottom  >
      <div className="card">
        <img src={props.src} alt="Image" />
        <div className="details">
          <h2>{props.name}</h2>
          <h3>{props.desc}</h3>
          <p>{props.role}</p>
        </div>
      </div>
    </Fade>
    </div>
  );
};

export default Cards;
