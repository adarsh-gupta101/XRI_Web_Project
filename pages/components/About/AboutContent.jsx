import React from "react";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineDown,
} from "react-icons/ai";

function AboutContent() {
  return (
    <div className='md:0p-16'>
      <div className='p-4 md:p-16'>
        <p className='text-3xl font-bold text-gray-600 text-center md:text-left'>
          Welcome to XRI{" "}
        </p>
        <p className='text-center text-5xl text-gray-500 my-4 '>
          &quot;Award Winning Market Research Agency&quot;
        </p>
        <p className='text-gray-600 p-2 tracking-wide	 text-xl'>
          Do you want to drive growth by winning and retaining customers? Join
          over 500 successful brands who have placed their trust in XRI
        </p>
        <p className='text-gray-600 p-2 tracking-wide	 text-xl'>
          With a passion for understanding brands and their customers, our
          strategic insights allow you to make the right decisions by bringing
          your customers into the very heart of your business. As an
          award-winning agency, we have provided over 20 years of intelligent
          and meaningful market research expertise for high profile brands, and
          continue to deliver first-class, game-changing business insights for
          our clients - right across the world.
        </p>
        <p className='text-gray-600 p-2 tracking-wide	 text-xl'>
          To us, insight stems from real discovery - exploring new ground to
          reveal a richer, deeper understanding of your brand, markets,
          customers and culture. It&apos;s about eureka moments and clarity.
          Ultimately, it&apos;s about growth. We understand that you want
          cost-effective and time-efficient research - without having to
          compromise on value. That&apos;s why we tailor our approach to fit
          perfectly around your brief, timeline and budget. We are innovators -
          pioneering groundbreaking techniques that delve deeper to truly
          understand what makes your customers tick.
        </p>
      </div>

      <div className='my-8 '>
        <div className='flex md:flex-row flex-col items-center justify-evenly'>
          <div className=' shadow-2xl hover:shadow-xl p-2 rounded-xl w-fit h-fit'>
            <img
              src='/assets/rose.jpeg'
              className='w-72 shadow-2xl hover:shadow-xl hover'
            />
            <p className='text-center p-2 text-2xl font-bold text-pink-500'>
              Rose Mudehwe
            </p>
            <div className='flex justify-between items-center my-4 md:my-2'>
              <AiFillInstagram className='text-4xl text-pink-500'></AiFillInstagram>
              <AiFillTwitterCircle className='text-blue-500 text-4xl'></AiFillTwitterCircle>
              <AiFillLinkedin className='text-blue-600 text-4xl'></AiFillLinkedin>
              <AiFillYoutube className='text-red-500 text-4xl'></AiFillYoutube>
            </div>
          </div>

          <div className='md:w-1/2 p-4'>
            <p className='text-base text-gray-600 my-4'>
              Rose is an experienced researcher with more than 21 years in
              market research. Rose is a holder of International Masters in
              Business Administration (Ehsal College, Brussels), in addition to
              Bachelor of Science General in Mathematics and Statistics and an
              IMM Higher Certificate from the Graduate School of Marketing in
              South Africa.{" "}
            </p>

            <p className='text-base text-gray-600 my-4'>
              She worked for Research International Zimbabwe from 1995 to 2005.
              She then moved to the Middle East, United Arab Emirates in Dubai
              where she worked for Research International Middle East and Incite
              Marketing & Research Solutions (2006 to 2008). She then relocated
              back to Zimbabwe and worked as an independent Research Consultant
              from 2009 to July 2012. She joined RBI (formerly known as Research
              International Zimbabwe) in August 2012 until September 2014.
            </p>
            <p className='text-base text-gray-600 my-4'>
              She is now working as a Managing Research Consultant with Expert
              Research Insights (XRI). Rose has vast market research experience
              having worked in diverse markets including Zimbabwe, Zambia,
              Malawi, Botswana, Mozambique and United Arab Emirates. She has
              worked with key global and regional Clients among them Union
              National Bank (Abu Dhabi), National Bank of Dubai, Ernst
              Young-Dubai, KPMG-Dubai, Old Mutual, Coca Cola, Samsung, Carrier
              (Dubai), Unilever, Orange, Nokia, Reckitt-Benckiser, BAT,
              InterMedia, Western Union and Plan Internationa
            </p>
          </div>
        </div>
        <div className=' flex flex-col md:flex-row-reverse items-center justify-evenly'>
          <div className='shadow-2xl hover:shadow-xl p-2 rounded-xl w-fit'>
            <div>
              <img
                src='/assets/david.jpeg'
                className='w-72 shadow-2xl hover:shadow-xl hover'
              />
              <p className='text-center p-2 text-2xl font-bold text-blue-500'>
                David Rusike
              </p>

              <div className='flex justify-between items-center my-4 md:my-2'>
                <AiFillInstagram className='text-4xl text-pink-500'></AiFillInstagram>
                <AiFillTwitterCircle className='text-blue-500 text-4xl'></AiFillTwitterCircle>
                <AiFillLinkedin className='text-blue-600 text-4xl'></AiFillLinkedin>
                <AiFillYoutube className='text-red-500 text-4xl'></AiFillYoutube>
              </div>
            </div>
          </div>

          <div className='md:w-1/2 p-4'>
            <p className='text-base text-gray-600 my-4'>
              David holds a Bachelor of Business Administration degree in
              Marketing and a BSc Honours degree in Psychology. He is a
              well-rounded researcher with more than 24 years of research
              experience.
            </p>

            <p className='text-base text-gray-600 my-4'>
              David started off at Quest Research Services where he spent 8
              years as a Senior Research Executive before then moving to
              Research International Zimbabwe in 2000 where he spent 9 years,
              rising to the position of Client Services Director. In 2009, David
              then moved to Kenya where he joined Smart Outcomes as Research
              Director for a year. Upon his return to Zimbabwe, he joined
              Topline Research Services as Research Director, then Select
              Research at the beginning of 2011.
            </p>
            <p className='text-base text-gray-600 my-4'>
              In April 2011, David found his way back to Research Bureau
              International as Account Director responsible for providing
              strategic direction to the research teams. He was then elevated to
              Head of Qualitative department which saw him manage the
              Qualitative Business Unit until September 2014. He is now working
              as a Managing Research Consultant with Expert Research Insights
              (XRI).
            </p>

            <p className='text-base text-gray-600 my-4'>
              David has a wealth of experience which cuts through all the
              sectors, not only in Zimbabwe, but in the region and
              internationally.
            </p>
          </div>
        </div>
      </div>
      <div>
        <img alt='' src='/assets/hr.svg/'></img>
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
            and cultural insight market research agency. Winner of The
            Drum&apos;s Best Market Research Agency in 2020, and for 2021.
          </p>
        </div>
        <img
          alt=''
          src='/assets/XRISTORY.svg'
          className='w-4/5 md:w-2/5 m-2 shadow-xl'
        />
      </div>

      <div className='bg-[#e9ede9]'>
        <div className='flex md:flex-row flex-col p-8 '>
          <img src='https://visionone.co.uk/app/uploads/The-Drum-Winner-2021-Vision-One.gif' />
          <div className='p-8'>
            <p className='text-2xl font-bold text-gray-800'>
              Always In safe hands
            </p>
            <p className='py-2'>
              We value long-term partnerships and thrive on working with
              like-minded clients who are eager to discover fresh new insights
              to transform their business.
            </p>
            <p className='py-2'>
              Voted as the UK&apos;s best market research agency in 2020 AND
              2021, and internationally accredited with the prestigious ISO
              20252/2012, we continually outperform industry standards. You can
              see the evidence of our award-winning success from our extremely
              high client satisfaction scores.
            </p>
          </div>
        </div>
        <div className='p-8'>
          <h2 className='text-2xl font-bold text-gray-800'>Our Experts</h2>
          <p className='py-2'>
            We bring something fresh to every project. To us, insight comes from
            different perspectives - and it all starts with our
            multidisciplinary team. Vision One is made up of psychologists,
            planners, marketers, brand and businesses experts and researchers -
            the perfect combination of visionaries, allowing us to offer
            original and meaningful insight, right through from project design
            to presentation of final recommendations.
          </p>
          <p className='py-2'>
            Our research team includes both qualitative and quantitative
            research specialists, across B2B and consumer markets. We have
            developed our own award-winning innovative research tools, and use a
            full range of qualitative research approaches - from traditional
            focus groups and depth interviews to mobile, online and ethnography.
            Our comprehensive quantitative expertise encompasses all the most
            effective methods, including face-to-face, online and telephone
            surveys.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutContent;
