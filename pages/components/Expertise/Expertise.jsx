import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Head from "next/head";
import OurExpertise from "./OurExpertise";

function Expertise() {
  return (
    <div style={{ fontFamily: "Open Sans" }}>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap'
          rel='stylesheet'
        />
            <link rel="icon" href="/logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffffff" />
        <title>XRI Agency</title>
      </Head>
      <Header />
      <div className='relative h-96' style={{ fontFamily: "Open Sans" }}>
        <img
          alt=''
          className="h-96 w-full object-cover"
          src='https://visionone.co.uk/app/uploads/Our-Expertise-Vision-One-e1600788247605-1600x800.jpg'
        />

        <div className='absolute bottom-0 md:bottom-30 p-8'>
          {" "}
          <p className='text-4xl md:text-6xl font-bold text-white text-blue-500'>
            Research Solutions{" "}
          </p>
          <p className='md:text-4xl font-semibold text-white'>
            Our team has a wealth of research experience{" "}
          </p>
        </div>
      </div>

      <OurExpertise />
      <Footer />
    </div>
  );
}

export default Expertise;
