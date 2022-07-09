import React from "react";
import Contact from "../Contact";
import Header from "../Header";
import Footer from "../Footer";
import Toolset from "./Toolset";
import Head from "next/head";

function Toolbox() {
  return (
    <div>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Header />

      <div className='relative' style={{ fontFamily: "Open Sans" }}>
        <video
          autoPlay
          className='object-contain'
          loop={true}
          alt=''
          src='https://visionone.co.uk/app/uploads/Market-Research-Tool-Box-Methods.mp4'
        />
        <div className='absolute  bottom-10 md:bottom-40 left-10'>
          <p className='text-xl  md:text-6xl  font-bold text-white'>
            Market Research Methods
          </p>
          <p className='text-white md:text-4xl'>
            Essential Research Methods for Business
          </p>
        </div>
      </div>
      <Toolset />
      <Contact />
      <Footer />
    </div>
  );
}

export default Toolbox;
