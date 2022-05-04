import React, { useState, useEffect } from "react";
import "./App.css";
import RevaLogo from "./components/assets/images/brand/logo-icon.png";
import RevaUni from "./components/assets/images/brand/revaunilogo.jpg";
import "./components/style/Loading.css";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Papers from "./components/Papers";
import AllCards from "./components/AllCards";
import Reg from "./components/Reg";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Date from "./components/Date";
import { MainCard } from "./components/Cards";
import Gtable from "./components/Gtable";
import Orgs from "./components/Org";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

import AllGcards from "./components/AllGcards";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Hero />
      <Gtable />
      <AllGcards />
      <Papers />
      <Date />
      <MainCard />
      <AllCards />
      <Reg />
      <Footer />
    </>
  );
};

const DisplayContent = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/org" element={<Orgs />}></Route>
      </Routes>
    </div>
  );
};

const LodingContent = () => {
  return (
    <div className="body-loading">
      <img className="loading" src={RevaLogo}></img>
    </div>
  );
  //
};

function App() {
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setloading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? <LodingContent /> : <DisplayContent />}

      {/* <DisplayContent /> */}
    </>
  );
}

export default App;
