import React, { useState, useEffect } from "react";
import "./App.css";
import RevaLogo from "./components/assets/images/brand/logo-icon.png"
import "./components/style/Loading.css"
import Hero from "./components/Hero";
import Header from "./components/Header";
import Papers from "./components/Papers";
import AllCards from "./components/AllCards";
import Reg from "./components/Reg";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Date from "./components/Date";
import { MainCard } from "./components/Cards";




const DisplayContent = () => {

  return(
 <div className="App"> 
      <Navbar />
      <Header />
      <Hero />
      <Date/>
      <Papers />
      <MainCard/>
      <AllCards />
      <Reg />
      <Footer />
    </div>
  )
}

const LodingContent = () => {

  return (
    <div className="body-loading">
    <img className="loading" src={RevaLogo}></img>
    </div>
  )
//
}



function App() {

  const [loading,setloading] = useState(true)


useEffect(()=>{
  setInterval(()=>{
    setloading(false)
  },1500)
},[])

  return (
    <>
    {/* {loading ? <LodingContent/> :
    
        <DisplayContent/>
    
    } */}
     <DisplayContent/>
    </>
  );
}

export default App;
