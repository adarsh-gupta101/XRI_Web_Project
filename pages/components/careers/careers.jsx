import Head from "next/head";
import React from "react";
import Contact from "../Contact";
import Expertise from "../Expertise";
import Footer from "../Footer";
import Header from "../Header";
import Banner from "./Banner";
import Jobs from "./jobs";

function careers() {
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
      <Banner />
      <div className='p-8'>
        <p className='text-xl font-bold text-blue-400'>
          Talented and Ready to Move On?
        </p>
        <p className='py-2 text-gray-700 text-xl'>
          We are always keen to hear from talented South African marketing and
          research specialists looking for market research jobs. Whether a
          director or someone who is starting out on their career we&apos;d like to
          hear from you.
        </p>
        <p className='py-2 text-gray-700 text-xl'>

          We also have a number of research roles available throughout the South
          Africa which are highlighted below. So please feel free to send us
          your CV or to get in touch with us directly using the form below.
        </p>{" "}
        <p className='py-2 text-gray-700 text-xl'>
We always endeavour to reply. However, due to a large number of
        applications, we receive we are sometimes unable to provide feedback to
        unsuccessful applicants.</p>
      </div>
      <p className='text-xl p-8 text-gray-800'>

        For the latest news on our vacancies, feel free to follow us on <span className="text-blue-500">Twitter</span>
         or on <span className="text-blue-500">Facebook</span>. Alternatively, join us on <span className="text-blue-500">LinkedIn</span>.
      </p>
      <Jobs />
      <Expertise/>

      <Contact/>
      
       <Footer />
    </div>
  );
}

export default careers;
