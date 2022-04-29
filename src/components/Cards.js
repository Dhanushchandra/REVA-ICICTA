import React from "react";
import "./style/Cards.css";
import Fade from 'react-reveal/Fade';


const Cards = (props) => {
  return (
    <Fade bottom delay={200} >

      <div className="card">
        <img src={props.src} alt="Image" />
        <div className="details">
          <h2>{props.name}</h2>
          <h3>{props.desc}</h3>
          <p>{props.role}</p>
        </div>
      </div>
    </Fade>
  );
};

export default Cards;
