import React from "react";
import "./style/Papers.css";
import Slide from "react-reveal/Fade";
import Wobble from "react-reveal/Wobble";

const Papers = () => {
  return (
    <div className="container">
      <Slide left>
        <h1 className="text">Call for Papers</h1>
      </Slide>

      <div className="col-md-12">
        <p>
          Original and unpublished review / research papers are invited for
          presentation in the multi-disciplinary areas of Computer Science and
          Applications on the following topics (but not restricted to):
        </p>
      </div>
      <div className="row ">
        <Wobble>
          <div className="col-md-5 mycol">
            <ul>
              <li>Artificial Intelligence and Applications</li>
              <li>Blockchain </li>
              <li>Cloud Computing and Grid Computing </li>
              <li>Computer Graphics and Virtual Reality </li>
              <li> Data Warehousing and Data Mining </li>
              <li>Cryptography and Network Security</li>
              <li>Deep Learning </li>
              <li>Human Computer Interaction</li>
              <li>Image Processing and Speech Processing </li>
              <li> Quantum Computing </li>
              <li>Green Technologies</li>
            </ul>
          </div>
        </Wobble>
        <Wobble>
          <div className="col-md-5 mycol">
            <ul>
              <li>Information Retrieval and Internet Application </li>
              <li>Internet and Web Applications</li>
              <li>
                {" "}
                Distributed and Parallel Processing Internet of Vehicles{" "}
              </li>
              <li> Mobile Computing and Applications </li>
              <li> Multimedia Applications </li>
              <li>Real Time System </li>
              <li>Robotics</li>
              <li>Sensor Networks and Internet of Things </li>
              <li> Embedded Systems </li>
              <li>Swarm Intelligence </li>
              <li>Ubiquitous Computing </li>
            </ul>
          </div>
        </Wobble>
      </div>
      <hr className="line" />
    </div>
  );
};

export default Papers;
