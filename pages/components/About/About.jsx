import React from "react";
import Contact from "../Contact";
import Footer from "../Footer";
import Header from "../Header";
import AboutContent from "./AboutContent";
import AboutBanner from "./About__Banner"
function About() {
  return (
    <div>
        <Header/>
        <AboutBanner/>
        <AboutContent/>
        <Contact/>
        <Footer/>
        
    </div>
  );
}

export default About;
