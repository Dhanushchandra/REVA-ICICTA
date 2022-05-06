import React from "react";
import "./style/Header.css";
import Fade from "react-reveal/Fade";
import PDF from "./assets/files/1.pdf"



const Header = () => {
  return (
    <div class="hero row">
      <div className="col-md-7">
        <h1>
          International Conference on Innovative Computing Technologies and
          Applications (ICICTA - 2022)
        </h1>
      </div>
      <Fade >
        <div className="col-md-3 date date-main">
          <h2>Date :<br></br> 2<sup>nd</sup> and 3<sup>rd</sup> June, 2022</h2>
          <h3>Download Brochure Here!!</h3>

          <a download="ICICTA" href={PDF}>
            <button className="btn btn-info">Download</button>
          </a> 

          <a  className="form" href="https://forms.gle/coagtj1GLGV4vEpk9" target="_blank" >
            <button className="btn btn-success">Register</button>
          </a>     

         
        </div>
      </Fade>
    </div>
  );
};

export default Header;
