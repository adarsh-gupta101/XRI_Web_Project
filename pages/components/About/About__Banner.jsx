import React from "react";
import Link from "next/link";

// import "./banner.css"
function Banner() {
  return (
    <div className='h-' style={{fontFamily: 'Open Sans' }}>
      <div className='flex banner relative h-4/5'>
        {/* <Link href='/'> */}
        <img
          alt=''
          src='/assets/XRIl.png'
          className='hidden  md:block md:w-3/12 h-full object-cover  absolute z-10'></img>
        {/* </Link> */}
        <img
          alt=''
          src='https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
          className='w-full brightness-50 cover'></img>
        <p
          className='Banner_tex absolute w-76 top-1/3 mx-4 md:mx-0 md:left-1/2  sm:mx-8 md:mx-0 text-4xl md:text-7xl lg:text-7xl font-bold text-white'
          // style={{ top: "50%", left: "40%" }}
        >
          Zim’s Leading Research Insights Agency
          
        </p>
      </div>
    </div>
  );
}

export default Banner;
