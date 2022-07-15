import React from "react";

function Banner() {
  return (
    <div>
      <div className='relative h-96 overflow-hidden'>
        <img
          src='https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
          className='h-full w-full object-cover brightness-50'
        />

        <div className='absolute top-1/2 text-white left-10 shadow-lg'>
          <p className='text-4xl md:text-7xl text-blue-500 font-bold'>
            Jobs & Careers
          </p>
          <p className='text-3xl md:text-3xl text-gray-100 font-semibold'>
            Market Research Jobs at XRI
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
