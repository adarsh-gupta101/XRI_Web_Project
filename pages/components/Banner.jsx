import React from "react";
// import "./banner.css"
function Banner() {
  return (
    <div className="">
      <div className='flex relative h-fit' style={{backgroundImage:"url(/assets/vison.svg)"}}>
        <img
          src='/assets/vision.svg'
          className='hidden  md:block md:w-3/12 h-full object-cover  absolute z-10'></img>

        <img src='/assets/banner1.jpeg' className='w-full brightness-50'></img>
        <p
          className='Banner_text absolute md:text-7xl font-bold text-white'
          // style={{ top: "50%", left: "40%" }}
          >
          Award-Winning Strategic Insight Agency
        {/* <div className="absolute " style={{top:"60%",left:"40%"}}>
          <img src='/assets/reactangle.svg' />
          <p>Get In Touch Today</p>
        </div> */}
        </p>

      </div>
    </div>
  );
}

export default Banner;
