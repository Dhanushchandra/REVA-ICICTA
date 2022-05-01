import React from "react";
import "./style/Gcard.css";
import Fade from "react-reveal";

const Gcard = (props) => {
  return (
    <div className="col-md-4">
      <Fade bottom>
        <div className="our-team">
          <div className="picture">
            <img className="img-fluid" src={props.src} />
          </div>
          <div className="team-content">
            <h3 className="name">{props.name}</h3>
            <h4 className="title">{props.title}</h4>
          </div>
          <div className="social">
            <p>{props.desc}</p>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Gcard;
