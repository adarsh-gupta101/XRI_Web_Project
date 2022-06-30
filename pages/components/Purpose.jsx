import React from "react";

function Purpose() {
  return (
    <div className='flex pb-5'>
      <img alt='' className='hidden md:block' src='/assets/streak.jpg' />

      <div>
        <h1 className='text-3xl font-bold text-gray-600 text-center py-12'>
          Leading Market Research Insight Agency
        </h1>
        <h2 className='text-2xl text-center font-bold py-12 text-gray-500'>
          Market Research Agency with a passion for Insight & Discovery.
        </h2>
        <p className='text-gray-500 text-center text-base my-4 p-4 md:p-0'>
          Expert Research Insights (XRI) (Private) Limited, is a newly
          established market research agency with expertise in both Quantitative
          and Qualitative research solutions. Our team comprises experts in
          various sectors and has over 70 years of combined market research
          experience in Africa (Botswana, Kenya, Malawi, Mozambique, Nigeria,
          South Africa, Zambia and Zimbabwe), Europe & Middle East. Our team is
          highly experienced, dedicated and with a strong sense of commitment to
          ensuring the success of each project we undertake. We pride ourselves
          in our ability to offer customized research tailored to suit each
          client’s specific requirements.
        </p>
        {/* <p className='text-gray-500 text-center text-base my-4 p-4 md:p-0'>
          Our insights help brands across the world to make better decisions,
          giving them the confidence to stride ahead with a deeper understanding
          of their markets, customers and culture.
        </p>
        <p className='text-gray-500 text-center text-base my-4 p-4 md:p-0'>
          We are pioneers - using dynamic agile research methods to help your
          brand nurture innovation and new product development, measure customer
          satisfaction and track marketing performance to discover, reimagine
          and grow.
        </p> */}
        <p className='text-gray-500 text-base my-4 text-center p-4 md:p-0'>
          Our business objective is to provide compelling insights that are
          distinct and that authentically bring the brand promise and essence to
          life and create a competitive advantage in the market place and in
          consumers’ minds. We offer timely invaluable information to guide
          Client’s marketing strategies, for product and service development.
          This ensures that client’s marketing thinking is in constant
          harmonization with consumer mind as a survival and growth strategy in
          a cost effective way. It is essential that business dealings be
          relevant to the consumer at all times.and our mission is simple -
          <span className='italic'>
            “to discover new insights that will help organisations improve their
            understanding and profit through intelligent business and consumer
            research”.
          </span>
        </p>
        <div className='flex flex-col md:flex-row justify-evenly items-end'>
          <p className='text-2xl font-bold text-pink-500 border-2 border-pink-500 p-2 m-2 hover:text-white hover:bg-pink-500 ease=in-out duration-300'>
            Meet the team
          </p>
          <p className='text-2xl font-bold text-blue-500 border-2 border-blue-500 p-2 m-2 hover:text-white hover:bg-blue-500 ease=in-out duration-300'>
            Why US -Discover more
          </p>
        </div>
      </div>
    </div>
  );
}

export default Purpose;
