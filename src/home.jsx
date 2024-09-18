// import "./App.css";
// import React from 'react';
import Composlides from "./composlides.jsx";
import Header from "./header.jsx";
import Slideshow from "./slideshow.jsx";
import Middlediv from "./middlediv.jsx";
import AboutUs from "./aboutus.jsx";

function home() {
  return (
    <div>
      <style>
        
      </style>
      <Header></Header>
      <Slideshow></Slideshow>

      <Middlediv></Middlediv>
      <Composlides />
     
      <AboutUs/>  
    </div>
  );
}

export default home;
