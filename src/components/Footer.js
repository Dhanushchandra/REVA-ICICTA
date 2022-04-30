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
          <span>Dr. S. Senthil</span>,   Convener (ICICTA-22), Professor & Director, School of CSA, REVA University, Bengaluru.
            <br/>Ph: 88847 50100 <br />
            <span>Dr. Rajeev Ranjan</span>,Associate Professor, School of CSA, REVA
            University, Bengaluru.
            <br/>Ph: 91088 98284 <br />
            <span>Dr. Hemanth K. S</span>, Associate Professor, School of CSA, REVA
            University, Bengaluru. 
            <br/>Ph: 99862 57582 <br />
            <span>Mrs. Deepa B. G</span>, Assistant Professor, School of CSA, REVA University,
            Bengaluru.
            <br/> Ph: 81050 95047 <br />
          </div>
          <div className="col-md-3 address">
            <h3>Address</h3>
            <span>
              Address: Rukmini Knowledge Park, Kattigenahalli, SH 104, Srinivasa
              Nagar, Bengaluru, Karnataka 560064
            </span>
            <div>
                <iframe
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.7291172872892!2d77.63310401482352!3d13.116339290761024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae19721a651fd3%3A0xdee225fe28f600f6!2sREVA%20University!5e0!3m2!1sen!2sin!4v1651308232839!5m2!1sen!2sin"
              width="100%"
              height="150"
              style={{ border: "0", marginTop: "10px" }}
              allowfullscreen=""
              loading="lazy"
            ></iframe>
            </div>
                     
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
                    Copyright &copy; 2024, All Right Reserved by{" "}
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
