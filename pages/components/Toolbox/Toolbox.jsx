import React from "react";
import Contact from "../Contact";
import Header from "../Header";
import Footer from "../Footer";
import Toolset from "./Toolset";

function Toolbox() {
  return (
    <div>
      <Header />

      <div className="relative">
        <video
          autoPlay
          className='cover'
          loop={true} alt=""
          src='https://visionone.co.uk/app/uploads/Market-Research-Tool-Box-Methods.mp4'
        />
        <div className="absolute  bottom-10 md:bottom-40 left-10">
          <p className="md:text-6xl  text-3xl font-bold text-white">Market Research Methods</p>
          <p className="text-white md:text-4xl">Essential Research Methods for Business</p>
        </div>
      </div>
      <Toolset/>
      <Contact />
      <Footer />
    </div>
  );
}

export default Toolbox;
