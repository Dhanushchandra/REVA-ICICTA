import React, { useState, useEffect } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Papers from "./components/Papers";
import AllCards from "./components/AllCards";
import Reg from "./components/Reg";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Date from "./components/Date";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Hero />
      <Date/>
      <Papers />
      <AllCards />
      <Reg />
      <Footer />
    </div>
  );
}

export default App;
