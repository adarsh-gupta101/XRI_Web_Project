import React from "react";
import OurExpertiseInduvidual from "./OurExpertiseInduvidual";

const data = [
  {
    name: " Advertising Research",
    img: "https://images.unsplash.com/photo-1627897495484-229b29feb0d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    text: "Launch campaigns that make consumers fall in love with your brand, making it grow and maximizing the return on your advertising investment",
  },
  {
    name: " Brand Tracking Research",
    img: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    text: "See your brand through your client's eyes and find new ways to strengthen customer relationships in a world of constant change.",
  },
  {
    name: "Brand/Image Audit Surveys",

    img: "https://images.unsplash.com/photo-1587955415524-bb264e518428?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    text: "XRI has a proven track record of effectively carrying our branding research.",
  },
  // {
  //   name: "    FMCG,Food Drink",
  //   img: "https://visionone.co.uk/app/uploads//Food-and-Drink-Vision-One-600x400.jpg",
  //   text: "From Food to beverages Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur doloribus voluptate asperiores error illo expedita necessitatibus quae blanditiis delectus placeat!",
  // },
  {
    name: "Customer Satisfaction Surveys    ",
    img: "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    text: "Customers are your biggest source of learning. Hear them and provide the best experience, instantly and over time.",
  },
  {
    name: "Employee Satisfaction Surveys    ",

    img: "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    text: "Build An Engaged, Efficient, Better Performing And Inspired Workforce. At XRI we provide action oriented insights.",
  },
  {
    name: "Habits/Usage & Attitudes Research    ",

    img: "https://images.unsplash.com/photo-1474859569645-e0def92b02bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    text: "XRI helps you discover perceptions, brand equity, and usage habits among the shoppers you’re trying to reach most.",
  },
  {
    name: "Industrial Market Research    ",

    img: "https://images.unsplash.com/photo-1501523460185-2aa5d2a0f981?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=931&q=80",
    text: "Identify the unmet needs of your market, and develop successful products to meet them.",
  },
  {
    name: "Market Segmentation    ",

    img: "https://images.unsplash.com/photo-1576562331281-d09e46af9854?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
    text: "Our bespoke insight solutions help you make informed decisions to transform your business...",
  },
  {
    name: "Media Research    ",

    img: "https://images.unsplash.com/photo-1536604673810-81370412626d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80",
    text: "Helping you optimise your brand by understanding its emotional and rational connection with your market.",
  },
  {
    name: "Mystery Shopping    ",

    img: "https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80",
    text: "Discover Exactly How Your Employees Engage With Your Customers Across Every Touchpoint. ",
  },
  {
    name: "Product Development   ",

    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdCUyMGRldmVsb3BtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    text: "XRI is a premier provider Industrial Market Research and Strategy Intelligence Solutions for many of the Zim’s most prestigious companies",
  },
  {
    name: "Customized Research   ",

    img: "https://images.unsplash.com/photo-1586936893354-362ad6ae47ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    text: "Get the Valuable Insight You Need to Achieve Your Objectives",
  },
];

function OurExpertise() {
  return (
    <div className='flex flex-wrap items-center justify-center py-8  '>
      <div className="text-base text-center">
        <p className="text-5xl text-blue-400 p-4 font-bold">What We Do</p>
        <p className="text-lg p-4">
          <span className="text-pink-500 text-2xl font-semibold">Expert Research Insights (XRI) (Private)</span> Limited is a
          full service market research agency with expertise in both
          Quantitative and Qualitative research solutions. Our commitment is to
          bring the best solutions to help business organizations to grow to
          their maximum potential. We offer an integrated service which is
          tailored to meet the specific objectives of our clients using the most
          appropriate techniques and methodologies.
        </p>
        <p className="text-lg p-4">
          We will therefore partner with you in establishing a research protocol
          for any type of research, (Quantitative and Qualitative), that is
          required for providing insights to implement business strategies. We
          also create project reports to help you take well informed decisions
          on your marketing development plans.
        </p>
      </div>
      <div className='m-8 flex flex-wrap items-center justify-center py-8 '>
        {data?.map((sats, id) => {
          return <OurExpertiseInduvidual key={id} status={sats} />;
        })}
      </div>
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
