import React,{useEffect} from "react";
import Cards from "./Cards";
import Slide from "react-reveal/Fade";
// import Jump from "react-reveal/Jump";
import Photo from "./assets/images/brand/logo-icon.png"
import Shyama from "./assets/images/photos/REV08629.jpg"
import Dhanamjaya from "./assets/images/photos/REV08988.jpg"
import Sunil from "./assets/images/photos/REV09013.jpg"
import Senthil from "./assets/images/photos/REV09014.jpg"
import Bhagavanalu from "./assets/images/photos/REV09005.jpg"
import Divakar from "./assets/images/photos/REV09006.jpg"

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
