import React from "react";

function Banner() {
  return (
    <div>
      <div className='relative h-96 overflow-hidden'>
        <img
          src='https://images.unsplash.com/photo-1636633762833-5d1658f1e29b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1339&q=80'
          className='h-full w-full object-cover brightness-75'
        />

        <div className='absolute top-1/2 text-white left-10 shadow-lg'>
          <p className='text-4xl md:text-7xl text-pink-500 font-bold'>FAQs</p>
          <p className='text-3xl md:text-3xl text-gray-100 font-semibold'>
          We are as Open as Possible
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
