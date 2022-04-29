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
            <div>
                <iframe
             src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d124388.67790665895!2d77.50376710949979!3d13.026361348936653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d12.931173699999999!2d77.5504773!4m5!1s0x3bae19721a651fd3%3A0xdee225fe28f600f6!2sgoogle%20maps%20reva%20university%20bangalore!3m2!1d13.1163393!2d77.6352927!5e0!3m2!1sen!2sin!4v1651205794227!5m2!1sen!2sin" 
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