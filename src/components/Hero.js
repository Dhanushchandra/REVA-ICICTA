import React from "react";
import "./style/Hero.css";
// import "./helper/Herohelper";
import Slide from "react-reveal/Fade";

const Hero = () => {
  return (
    <div className="container " id="about">
      <div className="row hero-main">
        <Slide left>
          <div className="col-md-7 about slide-right">
            <span>
              <h3>ABOUT THE CONFERENCE</h3>
              International Conference on Innovative Computing Technologies and
              Applications (ICICTA-22) will be held at REVA University on 2nd
              and 3rd June, 2022. The conference focuses on both theory and
              applications in the broad areas of Innovative Computing
              Technologies, Internet of Things, Data Analytics and Information
              Security. ICICTA-22 aims to build networks among the industries
              and academia, detecting research demands, exchanging best
              practices and experience in a global scale context. It will be an
              active forum for Academicians, Data scientists, Statisticians,
              Research Scholars and Students to share and disseminate
              information on knowledge and scientific research works.
            </span>
          </div>
        </Slide>
        <Slide right>
          <div className="col guidelines slide-left">
            <h3>GUIDELINES</h3>
            <span>
              The conference papers should be submitted as per IEEE format
              either in Word or PDF and should not exceed six pages. Further,
              the paper should contain name of the corresponding authors with
              E-mail ID. Please indicate the discipline of the paper in the
              subject column of the mail. All the submitted papers will be sent
              for peer review and the corresponding author will be notified with
              the outcome of the review process. Papers should be mailed to:
              icicta@reva.edu.in Papers will be published in the Conference
              Proceedings with ISBN number. Selected papers will be published in
              the Web of Science / Scopus Indexed / UGC-care Listed journals
              with extra publication charges.
            </span>
          </div>
        </Slide>
        <hr className="line" />
      </div>
    </div>
  );
};

export default Hero;
