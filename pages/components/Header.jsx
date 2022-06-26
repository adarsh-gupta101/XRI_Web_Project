import React, { useState } from "react";
import Hamburger from 'hamburger-react'

import { BsSearch } from "react-icons/bs";

function Header() {
  const [isAbout, setAbout] = useState(true);
  const [isOpen, setOpen] = useState(false)

  const [isContact, setContact] = useState(true);
  // if(MouseEvent.)
  return (
    <div className='relative'>
      <div className='bg-white flex md:flex h-32 justify-between md:justify-evenly items-center'>
        <img
          alt=' '
          src='assets/XRI.png'
          className='w-1/2 md:w-3/12 md:h-4/5 object-contain'
        />
         <ul className="block md:hidden">
        <Hamburger toggled={isOpen} toggle={setOpen} />
        </ul>
        <ul className=' justify-evenly items-center md:w-8/12  font-bold text-xl text-gray-600 hidden md:flex'>
          <li
            className='hover:border-blue-400 border-white  border-4 border-r-0 border-t-0 border-l-0 group'
            onMouseEnter={() => {
              setAbout(!isAbout);
            }}
            // onMouseLeave={() => {
            //   setAbout(!isAbout);
            // }}
          >
            About
            <div
              className={`w-full md:mt-8 ease-in-out duration-300 bg-white z-10 absolute left-0 hidden md:group-hover:block ${
                false ? "hidden" : "block"
              }`}
              style={{ zIndex: 100 }}>
              <div className={`flex justify-evenly items-center `}>
                <img src='https://visionone.co.uk/app/uploads/Creating.jpg' />
                <div>
                  <h1 className=' text-3xl font-bold text-gray-600'>
                    About{" "}
                  </h1>
                  <ul className='text-base font-semibold'>

                    <li>Happy Customers</li>
                    <li>Case Study</li>
                    <li>Our Gurantees</li>
                    <li>Going Green</li>
                    <li>Contact US</li>
                  </ul>
                </div>{" "}
                <div>
                  <h1 className=' text-3xl font-bold text-gray-600'>
                    Meet the Team
                  </h1>
                  <ul className='text-base font-semibold'>
                    <li>Tony Customers</li>
                    <li>Case John</li>
                    <li>Our Hugene</li>
                    <li>Rachel Green</li>
                    <li>Conio US</li>
                  </ul>
                </div>
              </div>
              <div className='bg-blue-400 text-center text-white p-2'>
                Unlock the Secret to brand success
              </div>
            </div>
          </li>

          <li
            className='hover:border-blue-400 border-white   border-4 border-r-0 border-t-0 border-l-0 group'
            onMouseEnter={() => {
              setContact(!isContact);
            }}>
            Services
            <div
              className={`md:mt-8 w-full ease-in-out duration-300 bg-white z-10 absolute left-0 hidden md:group-hover:block ${
                false ? "hidden" : "block"
              }`}
              style={{ zIndex: 100 }}>
              <div className={`flex justify-evenly items-center `}>
                <img src='https://visionone.co.uk/app/uploads/Supercharge.jpg' />
                <div>
                  <h1 className=' text-3xl font-bold text-gray-600'>
                    Services{" "}
                  </h1>
                  <ul className='text-base font-semibold'>
                    <li>Happy Customers</li>
                    <li>Case Study</li>
                    <li>Our Gurantees</li>
                    <li>Going Green</li>
                    <li>Contact US</li>
                  </ul>
                </div>{" "}
                <div>
                  <h1 className=' text-3xl font-bold text-gray-600'>
                    Meet the Team
                  </h1>
                  <ul className='text-base font-semibold'>

                    <li>Tony Customers</li>
                    <li>Case John</li>
                    <li>Our Hugene</li>
                    <li>Rachel Green</li>
                    <li>Conio US</li>
                  </ul>
                </div>
              </div>
              <div className='bg-pink-400 text-center text-white p-2'>
                Unlock the Secret to brand success
              </div>
            </div>
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
      {/* <div
        className={`w-full ease-in-out duration-300 bg-white z-10 absolute ${
          isAbout ? "hidden" : "block"
        }`}
        style={{ zIndex: 100 }}>
        <div className={`flex justify-evenly items-center `}>
          <img src='https://visionone.co.uk/app/uploads/Creating.jpg' />
          <div>
            <h1 className=' text-3xl font-bold text-gray-600'>About Us</h1>
            <ul>
              <li>Happy Customers</li>
              <li>Case Study</li>
              <li>Our Gurantees</li>
              <li>Going Green</li>
              <li>Contact US</li>
            </ul>
          </div>{" "}
          <div>
            <h1 className=' text-3xl font-bold text-gray-600'>Meet the Team</h1>
            <ul>
              <li>Tony Customers</li>
              <li>Case John</li>
              <li>Our Hugene</li>
              <li>Rachel Green</li>
              <li>Conio US</li>
            </ul>
          </div>
        </div>
        <div className='bg-blue-400 text-center text-white p-2'>
          Unlock the Secret to brand success
        </div>
      </div> */}

      {/* <div
        className={`w-full ease-in-out duration-300 bg-white z-10 absolute ${
          isContact ? "hidden" : "block"
        }`}
        style={{ zIndex: 100 }}>
        <div className={`flex justify-evenly items-center `}>
          <img src='https://visionone.co.uk/app/uploads/Creating.jpg' />
          <div>
            <h1 className=' text-3xl font-bold text-gray-600'>Services </h1>
            <ul>
              <li>Happy Customers</li>
              <li>Case Study</li>
              <li>Our Gurantees</li>
              <li>Going Green</li>
              <li>Contact US</li>
            </ul>
          </div>{" "}
          <div>
            <h1 className=' text-3xl font-bold text-gray-600'>Meet the Team</h1>
            <ul>
              <li>Tony Customers</li>
              <li>Case John</li>
              <li>Our Hugene</li>
              <li>Rachel Green</li>
              <li>Conio US</li>
            </ul>
          </div>
        </div>
        <div className='bg-blue-400 text-center text-white p-2'>
          Unlock the Secret to brand success
        </div>
      </div> */}
    </div>
  );
}

export default Header;
