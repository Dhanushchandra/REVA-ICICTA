import React from "react";
import Cards from "./Cards";
import Slide from "react-reveal/Fade";
// import Jump from "react-reveal/Jump";
import Photo from "./assets/images/logo-icon.png"

const AllCards = () => {
  return (
    <div className="container">
      <Slide right>
        <h1>OUR PATRONS</h1>
      </Slide>

      <div className="row">
        <Cards
          src={Photo}
          name="Dr. P. Shyama Raju"
          desc="Ho'ble Chancellor"
          role="CHIEF PATRON"
        />
        <Cards
          src={Photo}
          
          name="Dr.M.Dhanamjaya"
          desc="Vice-Chancellor"
          role="PATRON"
        />
        <Cards
          src={Photo}
          
          name="Dr.N.Ramesh"
          desc="Registrar"
          role="PATRON"
        />
        <Cards
          src={Photo}
          
          name="Dr.D.V.S.Bhagavanalu"
          desc="Dean IQAC"
          role="PATRON"
        />
         <Cards
          src={Photo}
         
          name="Dr.B.P.Divakar"
          desc="Dean R&I"
          role="PATRON"
        />
         <Cards
          src={Photo}
        
          name="Dr.Sunil Kumar S.Manvi"
          desc="Dean Engineering & Technology"
          role="PATRON"
        />
         <Cards
          src={Photo}
         
          name="Dr.S.Senthil"
          desc="Professor & Director, School of CSA "
          role="CONVENER"
        />
      </div>

      <hr className="line" />
    </div>
  );
};

export default AllCards;
