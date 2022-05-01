import React from "react";
import TempPhoto from "./assets/images/photos/temp-photo.jpg";

import Gcard from "./Gcard";
import Fade from "react-reveal/Fade";

const AllGcards = () => {
  return (
    <div className="container">
      <Fade bottom cascade>
        <h1>Our Guests</h1>
      </Fade>
      <div className="row mt-5">
        <Gcard
          src={TempPhoto}
          name="Guest1"
          title="title"
          desc="lorem text here..."
        />
        <Gcard
          src={TempPhoto}
          name="Guest2"
          title="title"
          desc="lorem text here..."
        />
        <Gcard
          src={TempPhoto}
          name="Guest3"
          title="title"
          desc="lorem text here..."
        />
      </div>
      <hr />
    </div>
  );
};

export default AllGcards;
