import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import "./banner.css"
function Banner() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,

    autoplay: true,
    speed: 500,
    autoplaySpeed: 2500,
    cssEase: "linear",

    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div
        style={{
          // backgroundColor: "#ddd",
          margin: "10px",
          borderRadius: "10px",
          padding: "10px",
        }}>
        <ul style={{ margin: "5px" }} className='p-4'>
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "30px",
          position: "absolute",
          border: "1px white solid",
          // borderRadius:"30%,70%,20%,4%",
          // top:"-250px",
          left: "50%",
        }}
        className='rounded-3xl text-xl bg-pink-500 hover:bg-blue-400 text-white shadow-2xl shadow-blue-400 bg-whit m-4 -top-10 md:-top-60 '>
        {i + 1}
      </div>
    ),
  };
  return (
    <div className=''>
      <div className=' flex relative w-full'></div>
      <Slider {...settings} className='overflow-hidden' id='Banner'>
        <div className=' flex relative w-full '>
          <img
            alt=''
            src='/assets/XRIl.png'
            className='hidden  md:block md:w-3/12 h-full object-cover  absolute z-10'></img>
          <img
            alt=''
            src='https://images.unsplash.com/photo-1573164574511-73c773193279?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80'
            className=' brightness-50 w-full overflow-y-hidden'></img>

          <p className=' absolute  left-1/3 mx-2 md:left-1/3 top-1/3 text-2xl text-blue-100  md:text-7xl text-r text-white font-extrabold'>
            Zim’s Leading Research{" "}
            <span className='text-pink-500'> Insights Agency</span>
          </p>
        </div>
        <div className=' flex relative w-full'>
          <img
            alt=''
            src='/assets/XRIl.png'
            className='hidden  md:block md:w-3/12 h-full object-cover  absolute z-10'></img>

          <img
            alt=''
            src='/assets/b.jpg'
            className=' brightness-50 w-full h-4/5'></img>

          <div className=' absolute  left-1/3 mx-2 md:left-1/3 top-1/3 text-2xl   md:text-7xl text-r text-white font-extrabold'>
            <span className='text-blue-500'> Innovation</span>,{" "}
            <span className='text-white-500'>Product optimisation</span> &{" "}
            <span className='text-pink-500'>Market strategy </span>
            <p className='text-base hidden md:block font-medium'>
              {/* Download our powerful new study created to help businesses discover
            the secrets of brand growth */}
            </p>
          </div>
        </div>
        <div className=' flex relative w-full '>
          <img
            alt=''
            src='/assets/XRIl.png'
            className='hidden  md:block md:w-3/12 h-full object-cover  absolute z-10'></img>
          <img
            alt=''
            src='https://images.unsplash.com/photo-1637856794303-d864ce316444?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
            className=' brightness-50 w-full overflow-y-hidden'></img>

          <p className=' absolute  left-1/2 mx-2 md:left-1/3 top-10  md:top-1/3 text-3xl   md:text-7xl text-r text-white font-extrabold'>
            <span className='text-blue-500'>Creativity</span> +{" "}
            <span className='text-pink-400'>Insight </span>= Successful
            products.
          </p>
        </div>
      </Slider>
    </div>
  );
}

export default Banner;
