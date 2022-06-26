import React from "react";
import { BsSearch } from "react-icons/bs";

function Header() {
  return (
    <div className='bg-white md:flex h-40 justify-evenly'>
      <img  alt=" "src='assets/vision.png' className='md:w-3/12 object-contain' />
      <ul className=' justify-evenly items-center md:w-8/12  font-bold text-xl text-gray-600 hidden md:flex'>
        <li className='hover:border-blue-400 border-white  border-4 border-r-0 border-t-0 border-l-0'>
          About
        </li>

        <li className='hover:border-blue-400 border-white   border-4 border-r-0 border-t-0 border-l-0'>
          Services
        </li>
        <li className='hover:border-blue-400 border-white  border-4 border-r-0 border-t-0 border-l-0'>
          Experience
        </li>

        <li className='hover:border-blue-400 border-white  border-4 border-r-0 border-t-0 border-l-0'>
          Tool Box
        </li>

        <li className='hover:border-blue-400 border-white  border-4 border-r-0 border-t-0 border-l-0'>
          {" "}
          Contact
        </li>
        <li className='hover:border-blue-400 border-white  border-4 border-r-0 border-t-0 border-l-0'>
          {" "}
          Lounge
        </li>
        <li className='hover:border-blue-400 border-white  border-4 border-r-0 border-t-0 border-l-0'>
          <BsSearch></BsSearch>
        </li>
      </ul>
    </div>
  );
}

export default Header;
