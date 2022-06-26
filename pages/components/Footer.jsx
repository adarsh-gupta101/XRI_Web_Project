import React from "react";

function Footer() {
  return (
    <div>
      <div
        className='flex flex-col md:flex-row justify-evenly py-28 object-cover text-white items-center md:items-start'
        style={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundImage:
            "url(https://images.pexels.com/photos/2238149/pexels-photo-2238149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
        }}>
        {/* Adress */}
        <p className='text-8xl font-bold bg-pink-500 text-white p-4 rounded-2xl shadow-2xl'>
          XRI
        </p>
        <div className="my-4 md:my-0">
          <p className='text-white text-xl mt-10 md:mt-0 font-bold'>Head Office (LONDON)</p>
          <adress>
            <p className='list-style-none'>85-87 Bayham Street,</p>
            <p>London,</p> NW1 0AG
          </adress>
          <p>+44 (0)203 693 3150</p>
        </div>
        <div className='md:p-0 md:p-0 hidden md:block'>
          <p className='text-white text-xl font-bold py-2'>Liver Pool Office</p>

          <p>+44 (0)203 693 3150</p>
          <p className='text-white text-xl font-bold'>Portugal Office </p>

          <p>+44 (0)203 693 3150</p>
        </div>{" "}
        {/* <div>
          <p className='text-white text-xl font-bold'>Head Office (LONDON)</p>
        
          <p>+44 (0)203 693 3150</p>
        </div> */}
        <div>
          <p className='text-white text-xl font-bold'>What We Do</p>

          <p className='list-style-none'>Brand Research</p>
          <p>Qualitative Research</p>
          <p>Market Research</p>

          <p>Internation market Research</p>
        </div>
      </div>

      <p className='text-center text-xs md:text-base bg-gray-600 p-4 text-white'>
        Vision One – Award winning market research company London (UK) |
        Copyright 2019 Vision One | All Rights Reserved | Website by Ibex |
        Sitemap
      </p>
    </div>
  );
}

export default Footer;
