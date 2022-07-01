import React from "react";
import Link from "next/link";

function ListItems() {
  return (
    <div
      className={`flex flex-col justify-evenly items-center absolute bg-gray-50 z-10 px-8 w-full border-2 my-8`}>
      <div className='p-2 px-8'>
        <p></p>
        <h1 className=' text-2xl text-center  font-bold text-gray-600'>
          <Link href='/components/About/About'>About Us</Link>
          {/* <div className='bg-pink-400 text-center w-full text-white p-2 mb-4'> */}
          {/* Unlock the Secret to brand success */}
          {/* </div> */}
        </h1>
        {/* <ul className='text-center'>
          <li>Happy Customers</li>
          <li>Case Study</li>
          <li>Our Gurantees</li>
          <li>Going Green</li>
          <li>Contact US</li>
        </ul> */}
      </div>{" "}
      {/* <div className='bg-pink-400 text-center w-full text-white p-2 mb-4'> */}
      {/* Unlock the Secret to brand success */}
      {/* </div> */}
      {/* <div>
      <Link href='/components/contacts/Contact'><h1 className=' text-2xl text-center font-bold text-gray-600'>
          Meet the Team
        </h1></Link>
        <ul className='text-center'>
          <ul className='text-center'>
            <li>David Rusike</li>
            <li>Ruth Phiri</li>
            <li>Rose Mudehwe</li>
          </ul>
        </ul>
      </div> */}
      <div className='bg-blue-400 w-full text-center text-white p-2'>
        {/* Unlock the Secret to brand success */}
      </div>
      {/*  */}
      <div className='p-2 px-8'>
        <p></p>
        <h1 className=' text-2xl text-center  font-bold text-gray-600'>
          <Link href='/components/Expertise/Expertise'> Services</Link>
        </h1>
        {/* <ul className='text-center'>
          <li>Happy Customers</li>
          <li>Case Study</li>
          <li>Our Gurantees</li>
          <li>Going Green</li>
          <li>
            {" "}
            <Link href='/components/contacts/Contact'> Contact US</Link>
          </li>
        </ul> */}
      </div>{" "}
      <div>
        {/* <h1 className=' text-2xl text-center font-bold text-gray-600'>
          Meet the Team
        </h1>
        <ul className='text-center'>
          <li>David Rusike</li>
          <li>Ruth Phiri</li>
          <li>Rose Mudehwe</li>
        </ul> */}
      </div>
      <div className='bg-pink-400 text-center w-full text-white p-2 mb-4'>
        {/* Unlock the Secret to brand success */}
      </div>
      <div className='p-2 px-8'>
        <p></p>
        <h1 className=' text-2xl text-center  font-bold text-gray-600'>
          Experience
        </h1>
        {/* <ul className='text-center'>
          <li>Happy Customers</li>
          <li>Case Study</li>
          <li>Our Gurantees</li>
          <li>Going Green</li>
          <li>Contact US</li>
        </ul> */}
      </div>{" "}
      <div>
        <h1 className=' text-2xl text-center font-bold text-gray-600'>
          {/* Meet the Team */}
        </h1>
        {/* <ul className='text-center'>
          <li>Tony Customers</li>
          <li>Case John</li>
          <li>Our Hugene</li>
          <li>Rachel Green</li>
          <li>Conio US</li>
        </ul> */}
      </div>
      <div className='bg-violet-400 text-center w-full text-white p-2 mb-4'>
        {/* Unlock the Secret to brand success */}
      </div>
      {/* <div className='p-2 px-8'>
        <p></p>
        <h1 className=' text-2xl text-center  font-bold text-gray-600'>
          Consumer & Brands
        </h1>
        {/* <ul className='text-center'>
          <li>Happy Customers</li>
          <li>Case Study</li>
          <li>Our Gurantees</li>
          <li>Going Green</li>
          <li>Contact US</li>
        </ul> 
      </div>{" "} */}
      {/* <div className='bg-pink-400 text-center w-full text-white p-2 mb-4'>
      </div>
       */}
      {/* <div>
        <h1 className=' text-2xl text-center font-bold text-gray-600'>
          Buisness and B2B
        </h1>
        
      </div> */}
      
      <div className='p-2 px-8'>
        <p></p>
        <h1 className=' text-2xl text-center  font-bold text-gray-600'>
          <Link href='/components/Toolbox/Toolbox'> Tool Box</Link>
        </h1>
        {/* <ul className='text-center'>
          <li>Happy Customers</li>
          <li>Case Study</li>
          <li>Our Gurantees</li>
          <li>Going Green</li>
          <li>Contact US</li>
        </ul> */}
      </div>{" "}
      {/* <div>
        <h1 className=' text-2xl text-center font-bold text-gray-600'>
          Meet the Team
        </h1>
        <ul className='text-center'>
          <li>David Rusike</li>
          <li>Ruth Phiri</li>
          <li>Rose Mudehwe</li>
        </ul>
      </div> */}
      <div className='bg-green-400 text-center w-full text-white p-2 mb-4'>
        {/* Unlock the Secret to brand success */}
      </div>
      <div className='p-2 px-8'>
        <p></p>
        <h1 className=' text-2xl text-center  font-bold text-gray-600'>
          <Link href='/components/contacts/Contact'> Contact</Link>
        </h1>
        {/* <ul className='text-center'>
          <li>Happy Customers</li>
          <li>Case Study</li>
          <li>Our Gurantees</li>
          <li>Going Green</li>
          <li>Contact US</li>
        </ul> */}
      </div>{" "}
      <div className='bg-pink-400 text-center w-full text-white p-2 mb-4'>
        {/* Unlock the Secret to brand success */}
      </div>
     
      
    </div>
  );
}

export default ListItems;
