import React from "react";

function Purpose() {
  return (
    <div className='flex'>
      <img className="hidden md:block" src='/assets/streak.jpg' />

      <div>
        <h1 className='text-3xl font-bold text-gray-600 text-center py-12'>
          Leading Market Research Insight Agency
        </h1>
        <h2 className='text-2xl text-center font-bold py-12 text-gray-500'>
          Market Research Agency with a passion for Insight & Discovery.
        </h2>
        <p className='text-gray-500 text-center text-base my-4 p-4 md:p-0'>
          Vision One is one of the UK&apos;s leading and fastest-growing specialist
          market research agencies, and winners of The Drum&apos;s Best Market
          Research Agency 2021. Also recognised as one of the most innovative
          and reliable in the UK, we are experts in forward-thinking, strategic
          insight.
        </p>
        <p className='text-gray-500 text-center text-base my-4 p-4 md:p-0'>
          Our insights help brands across the world to make better decisions,
          giving them the confidence to stride ahead with a deeper understanding
          of their markets, customers and culture.
        </p>
        <p className='text-gray-500 text-center text-base my-4 p-4 md:p-0'>
          We are pioneers - using dynamic agile research methods to help your
          brand nurture innovation and new product development, measure customer
          satisfaction and track marketing performance to discover, reimagine
          and grow.
        </p>
        <p className='text-gray-500 text-base my-4 text-center p-4 md:p-0'>
          Committed to the highest quality standards, we are proud to be 1 of
          around 100 market research companies in the world to be ISO 20252:2012
          accredited. We are a team of experienced, multidisciplinary research
          experts with a proven track record, and our mission is simple -
          <span className='italic'>
            “to discover new insights that will help organisations improve their
            understanding and profit through intelligent business and consumer
            research”.
          </span>
        </p>
        <div className='flex flex-col md:flex-row justify-evenly items-end'>
          <p className='text-2xl font-bold text-gray-400 border-2 border-pink-500 p-2 m-2'>Meet the team</p>
          <p className='text-2xl font-bold text-gray-400 border-2 border-blue-500 p-2 m-2'>
            Why US -Discover more
          </p>
        </div>
      </div>
    </div>
  );
}

export default Purpose;
