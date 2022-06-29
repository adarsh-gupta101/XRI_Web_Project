import React from "react";

function AboutContent() {
  return (
    <div className='md:0p-16'>
      <div className='p-4 md:p-16'>
        <p className='text-3xl font-bold text-gray-600'>Welcome to XRI </p>
        <p className='text-center text-5xl text-gray-500 my-4'>
          &quot;Award Winning Market Research Agency&quot;
        </p>
        <p className='text-gray-600 p-2'>
          Do you want to drive growth by winning and retaining customers? Join
          over 500 successful brands who have placed their trust in XRI
        </p>
        <p className='text-gray-600 p-2'>
          With a passion for understanding brands and their customers, our
          strategic insights allow you to make the right decisions by bringing
          your customers into the very heart of your business. As an
          award-winning agency, we have provided over 20 years of intelligent
          and meaningful market research expertise for high profile brands, and
          continue to deliver first-class, game-changing business insights for
          our clients - right across the world.
        </p>
        <p className='text-gray-600 p-2'>
          To us, insight stems from real discovery - exploring new ground to
          reveal a richer, deeper understanding of your brand, markets,
          customers and culture. It’s about eureka moments and clarity.
          Ultimately, it’s about growth. We understand that you want
          cost-effective and time-efficient research - without having to
          compromise on value. That’s why we tailor our approach to fit
          perfectly around your brief, timeline and budget. We are innovators -
          pioneering groundbreaking techniques that delve deeper to truly
          understand what makes your customers tick.
        </p>
      </div>

      <div className='bg-[#281728] flex flex-col md:flex-row justify-center items-center py-24'>
        <div>
          <h1 className='bg-pink-600 text-white text-center m-auto w-fit text-xl p-4'>
            Our History
          </h1>
          <p className='text-white text-center p-6'>
            XRI was founded by Tony Lewis in 1999. Originally providing
            strategic insight consultancy for companies like Marks and Spencer,
            Debenhams and the Arcadia Group, he was later joined by his now
            long-term business partner, Jas Gidda.
          </p>
          <p className='text-white text-center p-6'>
            Today, Vision One has evolved to become a multi-award-winning brand
            and cultural insight market research agency. Winner of The Drum's
            Best Market Research Agency in 2020, and for 2021.
          </p>
        </div>
        <img
          alt=''
          src='https://i.vimeocdn.com/video/1430480008-69397894a1ff61a7400d51eb5cb67e33299c83e95f1927f4d2857861bc02c1b0-d?mw=600&mh=338'
        />
      </div>
    </div>
  );
}

export default AboutContent;
