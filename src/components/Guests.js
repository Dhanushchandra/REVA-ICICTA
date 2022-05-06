import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Ozkur from "./assets/images/photos/Gphotos/Ozkur.jpg";
import Dey from "./assets/images/photos/Gphotos/Dey.jpeg";
import Rajeev from "./assets/images/photos/Gphotos/Rajeev.jpg";
import Mayukh from "./assets/images/photos/Gphotos/Mayukh.png";
import Vijay from "./assets/images/photos/Gphotos/Vijay.png";
import Ashutosh from "./assets/images/photos/Gphotos/Ashutosh.jpg";
import Raja from "./assets/images/photos/Gphotos/Raja.jpg";

const Guests = () => {
  return (
    <div className="container">
      <h1>OUR GUESTS</h1>
      <Carousel>
        <div className="our-team">
          <div className="picture">
            <img className="img-fluid" src={Rajeev} />
          </div>
          <div className="team-content">
            <h3 className="name">Dr. Rajeev Shorey</h3>
            <h4 className="title">
              {" "}
              Chief Executive Officer, University of Queensland<br></br> IIT Delhi
              Academy of Research (UQIDAR), New Delhi
            </h4>
           
            <div className="title">
              <span className="titletalk">--Title of the talk--</span>{" "}
              <span className="tttopic">
                Recent Investigations in Machine Learning and Edge Computing
              </span>
            </div>
          </div>
          <div className="social">
            <p></p>
          </div>
        </div>

        <div className="our-team">
          <div className="picture">
            <img className="img-fluid" src={Vijay} />
          </div>
          <div className="team-content">
            <h3 className="name">Dr. Vijay Srinivas Agneeswaran</h3>
            <h4 className="title">
              {" "}
              Machine Learning Research Leader<br></br> Microsoft Corporation,
              Bangalore
            </h4>
            <br></br>
            <div className="title">
              <span className="titletalk">--Title of the talk--</span>{" "}
              <span className="tttopic">
                Future of artificial intelligence.
              </span>
            </div>
          </div>
          <div className="social">
            <p>{}</p>
          </div>
        </div>

        <div className="our-team">
          <div className="picture">
            <img className="img-fluid" src={Ashutosh} />
          </div>
          <div className="team-content">
            <h3 className="name">Dr. Ashuthosh Saxena</h3>
            <h4 className="title">
              {" "}
              Associate Vice-President and Principal Research Scientist<br></br>{" "}
              Infosys Technology Limited, Bangalore
            </h4>
            <br></br>
            <div className="title">
              <span className="titletalk">--Title of the talk--</span>{" "}
              <span className="tttopic">
                "Strategies for Innovation and Creativity"
              </span>
            </div>
          </div>
          <div className="social">
            <p>{}</p>
          </div>
        </div>

        <div className="our-team">
          <div className="picture">
            <img className="img-fluid" src={Ozkur} />
          </div>
          <div className="team-content">
            <h3 className="name">Dr. Ozgur Aktunc</h3>
            <h4 className="title">
              {" "}
              Professor of Software Engineering Graduate Program Director
              <br></br> ST. MARY'S University, San Antonio, Texas, USA
            </h4>
            <br></br>
            <div className="title">
              <span className="titletalk">--Title of the talk--</span>{" "}
              <span className="tttopic">
                Latest Trends in Agile Development
              </span>
            </div>
          </div>
          <div className="social">
            <p>{}</p>
          </div>
        </div>

        <div className="our-team">
          <div className="picture">
            <img className="img-fluid" src={Dey} />
          </div>
          <div className="team-content">
            <h3 className="name">Dr. Nilanjan Dey</h3>
            <h4 className="title">
              {" "}
              Associate Professor, Department of Computer Science and
              Engineering, JIS University, Kolkata
            </h4>

            <div className="title">
              <span className="titletalk">--Title of the talk--</span>{" "}
              <span className="tttopic">
                Deep Learning in Medical Imaging: Challenges and
                State-of-the-Art Solutions
              </span>
            </div>
          </div>
          <div className="social">
            <p>{}</p>
          </div>
        </div>

        <div className="our-team">
          <div className="picture">
            <img className="img-fluid" src={Mayukh} />
          </div>
          <div className="team-content">
            <h3 className="name">Dr. Mayukh Das</h3>
            <h4 className="title">
              {" "}
              Senior Research Scientist<br></br> Microsoft Research India
              Bangalore
            </h4>
            <br></br>
            <div className="title">
              {/* <span className="titletalk">Title of the talk :</span>{" "}
              <span className="tttopic">-----------------------</span> */}
            </div>
          </div>
          <div className="social">
            <p>{}</p>
          </div>
        </div>

        <div className="our-team">
          <div className="picture">
            <img className="img-fluid" src={Raja} />
          </div>
          <div className="team-content">
            <h3 className="name">Mr. Raja Selvaraj</h3>
            <h4 className="title">
              {" "}
              Sr. Principal Cyber security Consultant (Cloud & Container),
              Standard Chartered Bank, Singapore
            </h4>
            <br></br>
            <div className="title">
              <span className="titletalk">--Title of the talk--</span>{" "}
              <span className="tttopic">Cloud Security</span>
            </div>
          </div>
          <div className="social">
            <p>{}</p>
          </div>
        </div>
      </Carousel>
      <hr />
    </div>
  );
};

export default Guests;
