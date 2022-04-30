import React from "react";
import Cards from "./Cards";

import Photo from "./assets/images/brand/logo-icon.png"
import Dhanamjaya from "./assets/images/photos/REV08988.jpeg"
import Sunil from "./assets/images/photos/REV09013.jpeg"
import Senthil from "./assets/images/photos/REV09014.jpeg"
import Bhagavanalu from "./assets/images/photos/REV09005.jpeg"
import Divakar from "./assets/images/photos/REV09006.jpeg"

const AllCards = () => {


  return (
    <div className="container">

      <div className="row">
       
          <Cards 
          src={Dhanamjaya}
          
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
          src={Bhagavanalu}
          
          name="Dr.D.V.S.Bhagavanalu"
          desc="Dean IQAC"
          role="PATRON"
        />
         <Cards
          src={Divakar}
         
          name="Dr.B.P.Divakar"
          desc="Dean R&I"
          role="PATRON"
        />
         <Cards
          src={Sunil}
        
          name="Dr.Sunil Kumar S.Manvi"
          desc="Dean Engineering & Technology"
          role="PATRON"
        />
         <Cards
          src={Senthil}
         
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
