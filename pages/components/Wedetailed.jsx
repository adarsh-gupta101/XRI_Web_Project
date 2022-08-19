import Link from "next/link";
import React from "react";

function Wedetailed() {
  return (
    <div>
      <div className='bg-[#281728] flex flex-col md:flex-row justify-center items-center py-24'>
        <div>
          <h1 className='bg-pink-600 text-white text-center m-auto w-fit text-xl p-4'>
            About XRI
          </h1>
          <p className='text-white text-center p-6'>
            Want to find out more about who Expert Research Insights are, what
            we stand for and what makes us the leading Market Research Company
            in Zimbambwe .Watch the our story here!
          </p>
        </div>
        <img
          alt=''
          src='/assets/XRISTORY.png'
          className="md:w-2/5 m-2"
        />
      </div>

      <div className='relative' >
        <img
          alt=''
          src='https://images.pexels.com/photos/892541/pexels-photo-892541.jpeg?auto=compress&cs=tinysrgb'
          className='w-full h-96 brightness-50 '
          // style={{ height: "60vh" }}
        />

        <div className='bg-blue-400/50 w-full absolute top-0 backdrop-opacity-95 h-full p-4 md:p-12'>
          <p className='text-2xl md:text-4xl text-white font-bold text-center md:text-center'>
            Market Research Company Testimonials
          </p>

          <p className=' py-8 md:py-24 text-sm  text-white text-center '>
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

      <div className='bg-pink-600 flex p-4 md:p-24'>
        <div className='text-white'>
          <h1 className='text-4xl font-bold'>
            Want to take part in market research?
          </h1>
          <p className='mt-10'>
            Be a part of our online community The Lounge to get paid for taking
            part in online surveys, focus groups and other market research jobs!
            Simply click the links below.
          </p>
          <div className='md:flex py-6'>
            <p className='border-2 border-white p-4 my-2 mx-4 hover:text-pink-600 font-bold hover:bg-white ease-in-out duration-200'>
           <Link href="components/Lounge/Lounge">   ONLINE SURVEYS</Link>
            </p>
            <p className='border-2 border-white p-4 my-2 mx-4 hover:text-pink-600 font-bold hover:bg-white ease-in-out duration-200'>
            <Link href="components/Lounge/Lounge">     FOCUS GROUPS</Link>
            </p>
          </div>
        </div>

        {/* <img alt="" src="/assets/streak2.jpg"/> */}
      </div>
    </div>
  );
}

export default Wedetailed;
