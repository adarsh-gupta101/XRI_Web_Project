import React from "react";

// import "./banner.css"
function Banner() {
  return (
    <div className=''>
      <div
        className='flex relative w-full'
      >
        {" "}
        <img
          alt=''
          src='/assets/XRIl.png'
          className='hidden  md:block md:w-3/12 h-full object-cover  absolute z-10'></img>
        <img
          alt=''
          src='https://images.unsplash.com/photo-1573164574511-73c773193279?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80'
          className='w-full  brightness-50'></img>
        <p
          className=' absolute  left-10 md:left-1/3 top-1/3 text-2xl   md:text-7xl text-r text-white font-extrabold'
          // style={{ top: "50%", left: "40%" }}
        >
          Zim’s Leading Research Insights Agency
        
        </p>
      </div>
    </div>
  );
}

export default Banner;
