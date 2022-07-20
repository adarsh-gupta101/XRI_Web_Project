import Link from "next/link";
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
      <div className='p-4 md:p-16 flex '>
        <div className='md:w-3/4'>
          <p className='text-3xl font-bold text-pink-500 text-center md:text-left'>
            Welcome to XRI{" "}
          </p>
          <p className='text-center text-5xl text-blue-500 my-4 font-semibold'>
            &quot;The leading Marketing Agency&quot;
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
            and meaningful market research expertise for high profile brands,
            and continue to deliver first-class, game-changing business insights
            for our clients - right across the world.
          </p>
          <p className='text-gray-600 p-2 tracking-wide	 text-xl'>
            To us, insight stems from real discovery - exploring new ground to
            reveal a richer, deeper understanding of your brand, markets,
            customers and culture. It&apos;s about eureka moments and clarity.
            Ultimately, it&apos;s about growth. We understand that you want
            cost-effective and time-efficient research - without having to
            compromise on value. That&apos;s why we tailor our approach to fit
            perfectly around your brief, timeline and budget. We are innovators
            - pioneering groundbreaking techniques that delve deeper to truly
            understand what makes your customers tick.
          </p>
        </div>

        <div className='w-1/4 hidden md:block shadow h-fit p-2 py-4'>
          <p className='bg-blue-500 font-bold text-white p-2 tracking-wide	 text-xl'>
            About Us
          </p>
          <div className='bg-re-100 mx-8 '>
            <p className='hover:text-blue-400 text-gray-600 p-3 border-x-0 border-t-0 border-2 border-gray-500 font-semibold tracking-wide	text-left text-xl'>
         <Link href="/component/About/About">     Meet the Team</Link>
            </p>
            <p className='hover:text-blue-400 text-gray-600 p-3 border-x-0 border-t-0 border-2 border-gray-500 font-semibold tracking-wide	text-left  text-xl'>
            <Link href="/component/About/1">   Rose Mudehwe</Link>
            </p>
            <p className='hover:text-blue-400 text-gray-600 p-3 border-x-0 border-t-0 border-2 border-gray-500 font-semibold tracking-wide	text-left  text-xl'>
            <Link href="/component/About/0"> David Rusike </Link>
            </p>
            {/* <p className='hover:text-blue-400 text-gray-600 p-3 border-x-0 border-t-0 border-2 border-gray-500 font-semibold tracking-wide	text-left  text-xl'>
              Ruth Phiri
            </p> */}
            <p className='hover:text-blue-400 text-gray-600 p-3 border-x-0 border-t-0 border-2 border-gray-500 font-semibold tracking-wide	text-left  text-xl'>
             <Link href="/components/Resources/resources"> Resources</Link>
            </p>
          </div>
        </div>
      </div>

      <div className='flex flex-col md:flex-row items-center justify-around'>
   
        <div className='container m-auto relative w-4/5 md:w-1/4 group md:p-2'>
          <p className='absolute idden md:block bottom-10 z-10 text-white p-4 text-4xl font-bold'>
            Rose Mudehwe{" "}
          </p>
          <img alt='' src='/assets/rose.jpeg' className='brightness-70 hover:brightness-50' />
          <div className='overlay absolute z-20 left-0 right-0 bottom-0 bg-blue-400/80  overflow-hidden w-full h-0 group-hover:h-full ease-in-out duration-300 flex flex-col items-center justify-center'>
            <div className='text text-center '>
              <p className='p-2 text-white'>Read more about Rose</p>
              <p className='bg-black  my-4 text-gray-50 w-fit m-auto p-2 rounded'>
                <Link
                  href={{
                    pathname: "/components/About/[team]",
                    query: { team: 1 },
                  }}>
             
                  Read more
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className='container m-auto relative w-4/5 md:w-1/4 group md:p-2'>
          <p className='absolute idden md:block bottom-10 z-10 text-white p-4 text-4xl font-bold'>
            David Rusike
          </p>
          <img alt='' src='/assets/david.jpeg' className='brightness-70' />
          <div className='overlay absolute z-20 left-0 right-0 bottom-0 bg-pink-400/80  overflow-hidden w-full h-0 group-hover:h-full ease-in-out duration-300 flex flex-col items-center justify-center'>
            <div className='text text-center '>
              <p className='p-2 text-white'>
                <Link
                  href={{
                    pathname: "/components/About/[team]",
                    query: { team: 0 },
                  }}>
                  Read more about David
                </Link>
              </p>
              <p className='bg-black  my-4 text-gray-50 w-fit m-auto p-2 rounded'>
                <Link
                  href={{
                    pathname: "/components/About/[team]",
                    query: { team: 0 },
                  }}>
             
                  Read more
                </Link>
              </p>
            </div>
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
            XRI was founded by David and Rose in 2014,with a vision to provide
            compelling insights that are distinct and that authentically to
            bring the brand promise and essence to life and create a competitive
            advantage in the market place and in consumers minds.
          </p>
          <p className='text-white text-center p-6'>
            Today ,XRI has grow to become a major brand and cultured insight
            market research agency.
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
          {/* <img src='https://visionone.co.uk/app/uploads/The-Drum-Winner-2021-Vision-One.gif' /> */}
          <div className="bg-red-600 flex items-center p-4">
            <p className="text-white text-xl text-center font-bold">Leading Market Research Agency in Zim</p>
          </div>
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
              One of the the leading market research agency in Zimbabwe over the
              past 5 years and a member of MRAZ.
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
