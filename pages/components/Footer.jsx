import React from "react";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineDown
} from "react-icons/ai";
import Purpose from "./Purpose";

function Footer() {
  const [state,setState]=React.useState()
  return (
    <div>
       <p className="md:hidden flex items-center text-center justify-center" style={{background: "#e1e1e1",}}>Vision One Market Reasearch London (UK)  <AiOutlineDown onClick={()=>setState(!state)} className="mx-2"/></p>
{state?<Purpose/>:""}
      <div
        className='flex flex-col md:flex-row justify-evenly py-28 object-cover text-white items-center md:items-start '
        style={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          background: "#e1e1e1",
          // backgroundImage:
          //   "url(https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80)",
        }}>

         
        {/* Adress */}
        <p className='text-8xl font-bold bg-pink-500 text-white p-4 rounded-2xl shadow-2xl'>
          XRI
        </p>
        <div className='my-4 md:my-0'>
          <p className='text-blue-500 bg-whie text-xl mt-10 md:mt-0 font-bold'>
            Head Office (LONDON)
          </p>
          <span className='text-gray-500'>
            <p className='list-style-none'>85-87 Bayham Street,</p>
            <p>London,</p> NW1 0AG
          </span>
          <p className='text-gray-500'>+44 (0)203 693 3150</p>
          <div className='flex justify-between items-center my-4 md:my-2'>
            <AiFillInstagram className='text-4xl text-pink-500'></AiFillInstagram>
            <AiFillTwitterCircle className='text-blue-500 text-4xl'></AiFillTwitterCircle>
            <AiFillLinkedin className='text-blue-600 text-4xl'></AiFillLinkedin>
            <AiFillYoutube className='text-red-500 text-4xl'></AiFillYoutube>
          </div>
        </div>
        <div className='md:p-0 hidden md:block text-gray-500'>
          <p className='text-blue-500  text-xl font-bold py-2 md:py-0'>
            Liver Pool Office
          </p>

          <p className='text-gray-500'>+44 (0)203 693 3150</p>
          <p className='text-blue-500  text-xl font-bold'>Portugal Office </p>

          <p className='text-gray-500'>+44 (0)203 693 3150</p>
        </div>{" "}
        {/* <div>
          <p className='text-white text-xl font-bold'>Head Office (LONDON)</p>
        
          <p>+44 (0)203 693 3150</p>
        </div> */}
        <div className='text-gray-500'>
          <p className='text-blue-500 text-xl font-bold'>What We Do</p>

          <p className='list-style-none'>Brand Research</p>
          <p>Qualitative Research</p>
          <p>Market Research</p>

          <p>Internation market Research</p>
        </div>
      </div>

      <p className='text-center text-base md:text-xs bg-gray-600 p-4 text-white'>
        Vision One – Award winning market research company London (UK) |
        Copyright 2019 Vision One | All Rights Reserved | Website by TrendOnline
        | Sitemap
      </p>
    </div>
  );
}

export default Footer;
