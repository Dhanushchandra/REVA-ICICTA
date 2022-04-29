import React from "react";
import "./style/Reg.css";
import Slide from "react-reveal/Slide";

function Reg() {
  return (
    <div className="container" id="registration">
      <Slide left>
        <h1>REGISTRATION DETAILS</h1>
      </Slide>
      <div className="row reg">
        <div className="col-md-6">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Categories</th>
                <th scope="col">Indian Nationals</th>
                <th scope="col">Foreign Nationals</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Students/Research Scholars</td>
                <td>INR 1750</td>
                <td>USD 100</td>
              </tr>
              <tr>
                <td>Faculty</td>
                <td>INR 2000</td>
                <td>USD 150</td>
              </tr>
              <tr>
                <td>Industrialist</td>
                <td>INR 4000</td>
                <td>USD 200</td>
              </tr>
              <tr>
                <td>Participants</td>
                <td>INR 1000 *</td>
                <td>USD 50*</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-md-4 reg-info">
          <h6>
            <span>* Spot Registration is accepted.</span>
            <br />
            <br />
            <br />
            Payment should be in the mode of DD, in favour of “REVA UNIVERSITY”
            payable at Bengaluru.
          </h6>
        </div>
      </div>
      <hr className="line" />
    </div>
  );
}

export default Reg;
