import Head from "next/head";
import React from "react";
import Contact from "../Contact";
import Footer from "../Footer";
import Header from "../Header";
import AboutContent from "./AboutContent";
import AboutBanner from "./About__Banner"
function About() {
  return (
    <div>
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
      </Head>
    <div style={{fontFamily:"Open Sans"}}>
        <Header/>
        <AboutBanner/>
        <AboutContent/>
        <Contact/>
        <Footer/>
        
    </div>
    </div>
  );
}

export default About;
