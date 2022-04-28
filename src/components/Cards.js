import React from "react";
import "./style/Cards.css";
import Jump from "react-reveal/Jump";

const Cards = (props) => {
  return (
    <Jump>
      <div className="card">
        <img src={props.src} alt="Image" />
        <div className="details">
          <h2>{props.name}</h2>
          <h3>{props.desc}</h3>
          <p>{props.role}</p>
        </div>
      </div>
    </Jump>
  );
};

export default Cards;
