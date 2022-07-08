import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import Contacts from "../Contact";
import Head from "next/head";

function Contact() {
  return (
    <div>
       <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
      </Head>
      <Header />
      <div>
        <div className='relative'>
          <img
            src='https://visionone.co.uk/app/uploads//Contact-Us-Picture-1600x800.jpg'
            alt=''
            className='brightness-50'
          />
          <div className='absolute bottom-0 md:bottom-40 p-4 shado' >
            <p className='text-4xl md:text-6xl font-bold  text-white text-blue-400 md:mx-8'>
              Tel +263772219600{" "}
            </p>
            <p className='font-semibold text-2xl  text-white md:mx-8'>
              We look forward to hearing from you
            </p>
          </div>
        </div>
      </div>
      <div className="p-8">
        <p className="text-xl font-bold bg-white text-gray-800">Thank You for Visiting</p>
        <p className="py-3 text-lg">
          Thank you for taking the time to explore XRI, we hope you found
          everything you were looking for. If not, please don&apos;t hesitate to get
          in touch, using our contact form below.
        </p>
        <p className="py-3 text-lg">
          If you&apos;d rather speak to us directly - we&apos;re a friendly bunch -  please either call our Harare office.

        </p>
        <p className="py-3 text-lg">
          You can also write to us - our address details are provided on the
          left-hand side below. We look forward to hearing from you.
        </p>
      </div>
      <Contacts />




      {/* <div>

      </div> */}
      <Footer />
    </div>
  );
}

export default Contact;
