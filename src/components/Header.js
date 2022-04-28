import React from "react";
import "./style/Header.css";
import Fade from "react-reveal/Fade";

const Header = () => {
  return (
    <div class="hero row">
      <div className="col-md-7">
        <h1>
          International Conference on Innovative Computing Technologies and
          Applications (ICICTA - 2022)
        </h1>
      </div>
      <Fade>
        <div className="col-md-3 date date-main">
          <h2>Date : 2nd and 3rd June, 2022</h2>
          <h3>download brochure here!!</h3>

          <a download="1.pdf" href="./files/">
            <button className="btn btn-info">download</button>
          </a>
        </div>
      </Fade>
    </div>
  );
};

export default Header;
