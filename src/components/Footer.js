import React from "react";
import "../components/style/Footer.css";
import Slide from "react-reveal/Slide";

const Footer = () => {
  return (
    <div>
      <div className="container" id="contact">
        <Slide right>
          <h1>CONTACT DETAILS</h1>
        </Slide>
        <div className="row contact">
          <div className="col-md-7">
            Dr. S. Senthil, Convener (ICICTA-22) <br />
            Professor & Director, School of CSA, REVA University, Bengaluru •
            Ph: 88847 50100 <br />
            Dr. Rajeev Ranjan,Associate Professor, School of CSA, REVA
            University, Bengaluru • Ph: 9108898284 <br />
            Dr. Hemanth K. S, Associate Professor, School of CSA, REVA
            University, Bengaluru • Ph: 99862 57582 <br />
            Ms. Deepa B. G, Assistant Professor, School of CSA, REVA University,
            Bengaluru • Ph: 81050 95047 <br />
          </div>
          <div className="col-md-3 address">
            <h3>Address</h3>
            <span>
              Address: Rukmini Knowledge Park, Kattigenahalli, SH 104, Srinivasa
              Nagar, Bengaluru, Karnataka 560064
            </span>
          </div>
        </div>
      </div>
      <footer class="footer-section">
        <div class="copyright-area">
          <div class="container">
            <div class="row">
              <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                <div class="copyright-text">
                  <p>
                    Copyright &copy; 2024, All Right Reserved{" "}
                    <a href="">Dhanush</a>
                  </p>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                <div class="footer-menu">
                  <ul>
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
                      <a href="#contact">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
