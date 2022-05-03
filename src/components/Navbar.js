import React, { useEffect } from "react";
import "./style/Navbar.scss";
import "./style/Navbar.css";
import "./helper/NavHelper";
import REVALOGO from "./assets/images/brand/revaunilogo.jpg";

const Navbar = () => {
  return (
    <div>
      <section className="navigation">
        <div className="nav-container">
          <div className="brand">
            <a href="https://www.reva.edu.in/" target="_blank" rel="noreferrer">
              <img src={REVALOGO} alt="REVA UNIVERSITY" />
            </a>
          </div>
          <nav>
            <div className="nav-mobile">
              <a id="nav-toggle" href="#!">
                <span></span>
              </a>
            </div>
            <ul className="nav-list">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>

              <li>
                <a href="#registration">Registration</a>
              </li>
              <li>
                <a href="#!">Reva Official</a>
                <ul className="nav-dropdown">
                  <li>
                    <a
                      href="https://www.instagram.com/reva_university/?hl=en"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/revauniversity"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.reva.edu.in/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Website
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
