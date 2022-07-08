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
      </Head>
      <Header />
      <div className='relative' style={{ fontFamily: "Open Sans" }}>
        <img
          alt=''
          src='https://visionone.co.uk/app/uploads/Our-Expertise-Vision-One-e1600788247605-1600x800.jpg'
        />

        <div className='absolute bottom-0 md:bottom-40 p-8'>
          {" "}
          <p className='text-4xl md:text-6xl font-bold text-white'>
            Research Solutions{" "}
          </p>
          <p className='md:text-4xl font-bold text-white'>
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
