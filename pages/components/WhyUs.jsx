import React from "react";
import ReactPlayer from "react-player";
import Expertise from "./Expertise";

function WhyUs() {
  return (
    <div>
            <img alt="" src='/assets/hr.svg/'></img>

      <div className='md:flex bg-black justify-evenly items-center py-24 px-2 md:px-12 text-white  '>
        <div className='text-white text-3xl'>
          <p className='text-center font-bold italic my-2'></p>
          <p className='font-bold text-5xl text-center pb-6 md:pb-0'>
            &quot;Top ranking Market Research in Southern Africa&quot;
          </p>
        </div>
        {/* <video autoPlay width={400} height={400} loop className=" m-auto">
          <source src='https://visionone.co.uk/app/uploads/Rec-Awards-Winner.mp4' />
        </video> */}
        {/* <ReactPlayer url='https://visionone.co.uk/app/uploads/Rec-Awards-Winner.mp4' width={400} height={400} loop /> */}
      </div>
      <img alt="" src='/assets/hr.svg/'></img>

      {/* HOWWWWWWWWWWWWWWWWWWWWWWWWW */}

      <div className='p-4 m-8'>
        <h1 className='text-4xl font-bold text-gray-600 py-6'>How we help</h1>
        <p className='text-gray-600'>
          We are a full-service market research agency providing a comprehensive
          range of marketing insight and consultancy services. We understand
          that you want cost-effective and time-efficient research - without
          having to compromise on value. That’s why we tailor our approach to
          fit perfectly around your brief, timeline and budget.
        </p>
        <p className='text-gray-600'>
          Our expertise and research services fall into four key areas:
        </p>

        <span className='list-disc p-2'>
          <li>Brand Development & Tracking</li>
          <li>Innovation and New Product Development</li>
          <li> Communications Development and Testing</li>
          <li>International Research</li>
        </span>
      </div>
      <p className='p-4 m-8'>Read more about our core areas of expertise...</p>
      <Expertise />
    </div>
  );
}

export default WhyUs;
