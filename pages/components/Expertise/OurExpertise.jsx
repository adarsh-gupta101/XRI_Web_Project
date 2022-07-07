import React from "react";
import OurExpertiseInduvidual from "./OurExpertiseInduvidual";

const data = [
  {
    name: "    FMCG,Food Drink",
    img: "https://images.unsplash.com/photo-1627897495484-229b29feb0d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    text: "From Food to beverages Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur doloribus voluptate asperiores error illo expedita necessitatibus quae blanditiis delectus placeat!",
  },
  {
    name: " Social Research",
    img: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    text: "lorem epsum",
  },
  {
    name: " Charity Research",

    img: "https://images.unsplash.com/photo-1587955415524-bb264e518428?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    text: "lorem epsum",
  },
  // {
  //   name: "    FMCG,Food Drink",
  //   img: "https://visionone.co.uk/app/uploads//Food-and-Drink-Vision-One-600x400.jpg",
  //   text: "From Food to beverages Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur doloribus voluptate asperiores error illo expedita necessitatibus quae blanditiis delectus placeat!",
  // },
  {
    name: " Social Research",
    img: "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    text: "lorem epsum",
  },
  {
    name: " Charity Research",

    img: "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    text: "lorem epsum",
  },
  // {
  //   name: "    FMCG,Food Drink",
  //   img: "https://visionone.co.uk/app/uploads//Food-and-Drink-Vision-One-600x400.jpg",
  //   text: "From Food to beverages Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur doloribus voluptate asperiores error illo expedita necessitatibus quae blanditiis delectus placeat!",
  // },
  // {
  //   name: " Social Research",
  //   img: "https://visionone.co.uk/app/uploads//Social-Research-600x400.jpg",
  //   text: "lorem epsum",
  // },
  // {
  //   name: " Charity Research",

  //   img: "https://visionone.co.uk/app/uploads/Charity-Research-Vision-One-e1600693149800-600x400.jpg",
  //   text: "lorem epsum",
  // },
];

function OurExpertise() {
  return (
    <div className='flex flex-wrap items-center justify-center py-8 '>
      {data?.map((sats, id) => {
        return <OurExpertiseInduvidual key={id} status={sats} />;
      })}

      {/*  */}
      <div className='mt-2'>
        <div className='bg-green-400  w-full backdrop-opacity-95 h-full p-4 md:p-12'>
          <p className='text-4xl text-white font-bold text-center md:text-left'>
            Market Research Company Testimonials
          </p>

          <p className=' py-8 md:py-24 text-xl  text-white text-center '>
            I&apos;d really recommend this agency. From enquiring about our
            market research project they sought our to really understand our
            questions and needs. Results were delivered really quickly without
            compromising quality of research and delivery of results
          </p>
          <p className='text-white flex justify-end text-left'>
            - Client Zamurai
          </p>
        </div>
        <img alt='' src='/assets/hr.svg' />
      </div>
      <div className='flex flex-row flex-wrap md:flex-row items-center justify-evenly p-8 md:p-16'>
        <div className='p-4'>
          <p className='text-3xl text-green-500 font-bold'>3,000+</p>
          <p className='font-bold text-gray-600'>Surveys Completed</p>
        </div>{" "}
        <div className='p-4'>
          <p className='text-3xl text-pink-500 font-bold'>99%</p>
          <p className='font-bold text-gray-600'>Positive Reviews</p>
        </div>
        <div className='p-4'>
          <p className='text-3xl text-blue-500 font-bold'>3,000+</p>
          <p className='font-bold text-gray-600'>Surveys Completed</p>
        </div>
        <div className='p-4'>
          <p className='text-3xl text-green-500 font-bold'>3,000+</p>
          <p className='font-bold text-gray-600'>Surveys Completed</p>
        </div>
      </div>
    </div>
  );
}

export default OurExpertise;
