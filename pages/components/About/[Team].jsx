import React from "react";
import Contact from "../Contact";
import Footer from "../Footer";
import Header from "../Header";
import WhyUs from "../WhyUs";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";

const data = [
  {
    name: "David",
    p1: "   David holds a Bachelor of Business Administration degree in Marketing and a BSc Honours degree in Psychology. He is a well-rounded researcher with more than 24 years of research experience.",
    p2: "  David started off at Quest Research Services where he spent 8 years as a Senior Research Executive before then moving to Research International Zimbabwe in 2000 where he spent 9 years, rising to the position of Client Services Director. In 2009, David then moved to Kenya where he joined Smart Outcomes as Research Director for a year. Upon his return to Zimbabwe, he joined Topline Research Services as Research Director, then Select Research at the beginning of 2011.",
    p3: " In April 2011, David found his way back to Research Bureau International as Account Director responsible for providing strategic direction to the research teams. He was then elevated to Head of Qualitative department which saw him manage the Qualitative Business Unit until September 2014. He is now working as a Managing Research Consultant with Expert Research Insights(XRI).",
    image: "/assets/david.jpeg",
    p4: " David has a wealth of experience which cuts through all the sectors, not only in Zimbabwe, but in the region and internationally.",
  },
  {
    name: "Rose Mudehwe",
    p1: "  Rose is an experienced researcher with more than 21 years in market research. Rose is a holder of International Masters in Business Administration (Ehsal College, Brussels), in addition to Bachelor of Science General in Mathematics and Statistics and an IMM Higher Certificate from the Graduate School of Marketing in South Africa.",
    p2: " She worked for Research International Zimbabwe from 1995 to 2005. She then moved to the Middle East, United Arab Emirates in Dubai where she worked for Research International Middle East and Incite Marketing & Research Solutions (2006 to 2008). She then relocated back to Zimbabwe and worked as an independent Research Consultant from 2009 to July 2012. She joined RBI (formerly known as Research International Zimbabwe) in August 2012 until September 2014.",
    p3: "  She is now working as a Managing Research Consultant with Expert Research Insights (XRI). Rose has vast market research experience having worked in diverse markets including Zimbabwe, Zambia, Malawi, Botswana, Mozambique and United Arab Emirates. She has worked with key global and regional Clients among them Union National Bank (Abu Dhabi), National Bank of Dubai, Ernst Young-Dubai, KPMG-Dubai, Old Mutual, Coca Cola, Samsung, Carrier (Dubai), Unilever, Orange, Nokia, Reckitt-Benckiser, BAT, InterMedia, Western Union and Plan Internationa",
    p4: "",
    image: "/assets/rose.jpeg",
  },
];

function Team() {
  const router = useRouter();
  const { Team } = router.query;
  console.log(Team);
  return (
    <>
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
      </Head>
      {/* {Team} */}
      <Header pos={"relative"} />
      <div className='flex  flex-col-reverse md:flex-row justify-evenly items-center md:mt-16 '>
        <p className=' text-4xl md:text-7xl text-blue-700 font-bold mt-2'>{data[Team]?.name}</p>
        <img src={data[Team]?.image} className='w-72 shadow-xl shadow-blue-200 mt-2' alt='' />
      </div>
      <div className='flex flex-col md:flex-row items-center '>
        <div className='md:my-24 md:w-3/4 md:mx-12'>
          <p className='text-3xl font-bold text-gray-600 md:text-left text-center mt-8 md:mt-0'>
            A brief background about {data[Team]?.name}
          </p>
          <p className='md:text-xl text-gray-600 my-4 p-2 md:p-0 md:font-bold'>
            {data[Team]?.p1}
          </p>
          <p className='my-2 text-gray-600 p-2 md:p-0 md:font-semibold'>{data[Team]?.p2}</p>
          <p className='my-2 text-gray-600 p-2 md:p-0 md:font-semibold'>{data[Team]?.p3}</p>
          <p className='my-2 text-gray-600 p-2 md:p-0 md:font-semibold'>{data[Team]?.p4}</p>
        </div>

        <div className='bg-[white] p-1 shadow-sm md:w-1/4 my-8 md:my-0'>
          <p className='text-4xl text-gray-500 border-2 border-gray-400 p-2 border-r-0 border-l-0 hover:text-3xl ease-in-out duration-100'>
            <Link href='/components/About/About/'>About Us</Link>
          </p>
          <p className='text-4xl text-blue-500  border-gray-400 p-2 border-0 border-l-0 border-t-0'>Meet the team</p>
          <p className='text-4xl text-pink-500 border-2 border-gray-400 p-2 border-r-0 border-l-0 border-t-0 hover:text-3xl ease-in-out duration-100'>
            <Link href='/components/About/0/'>David</Link>
          </p>{" "}
          <p className='text-4xl text-pink-500 border-2 border-gray-400 p-2 border-r-0 border-l-0 border-t-0 hover:text-3xl ease-in-out duration-100'>
            <Link href='/components/About/1/'>Rose Mudehwe</Link>
          </p>
          
        </div>
      </div>
      <WhyUs />
      <Contact />
      <Footer />
    </>
  );
}

export default Team;
