import React from "react";

// import "./banner.css"
function Banner() {
  return (
    <div className=''>
      <div
        className='flex relative w-full'
        // style={{ backgroundImage: "url(https://images.unsplash.com/photo-1587440871875-191322ee64b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80)" }}>
       
       > <img
          alt=''
          src='/assets/XRIl.png'
          className='hidden  md:block md:w-3/12 h-full object-cover  absolute z-10'></img>

        <img
          alt=''
          src='https://images.unsplash.com/photo-1573164574511-73c773193279?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80'
          className='w-full brightness-50'></img>
        <p
          className=' absolute  left-10 md:left-1/3 top-1/2 text-2xl   md:text-7xl  text-white font-extrabold'
          // style={{ top: "50%", left: "40%" }}
        >
          Zim’s Leading Research Insights Agency
          {/* <div className="absolute " style={{top:"60%",left:"40%"}}>
          <img alt="" src='/assets/reactangle.svg' />
          <p>Get In Touch Today</p>
        </div> */}
        </p>
      </div>
    </div>
  );
}

export default Banner;
