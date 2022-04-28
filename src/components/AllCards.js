import React from "react";
import Cards from "./Cards";
import Slide from "react-reveal/Fade";
// import Jump from "react-reveal/Jump";

const AllCards = () => {
  return (
    <div className="container">
      <Slide right>
        <h1>Something</h1>
      </Slide>

      <div className="row">
        <Cards
          src="https://images.unsplash.com/photo-1591485423007-765bde4139ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
          name="Dr. P. Shyama Raju"
          desc="Homble Chancellor"
          role="CHIEF PATRON"
        />
        <Cards
          src="https://images.unsplash.com/photo-1591485423007-765bde4139ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
          name="Dr.M.Dhanamjaya"
          desc="Vice-Chancellor"
          role="PATRONS"
        />
        <Cards
          src="https://images.unsplash.com/photo-1591485423007-765bde4139ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
          name="Dr.N.Ramesh"
          desc="Registrar"
          role="PATRONS"
        />
        <Cards
          src="https://images.unsplash.com/photo-1591485423007-765bde4139ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
          name="Dr.D.V.S.Bhagavanalu"
          desc="Dean"
          role="PATRONS"
        />
      </div>

      <hr className="line" />
    </div>
  );
};

export default AllCards;
