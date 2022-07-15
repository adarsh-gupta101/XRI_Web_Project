import Link from "next/link";
import React from "react";

function OurExpertiseInduvidual({ status }) {
  return (
    <div className=' relative  md:w-1/3 group p-1'>
      <p className='absolute  md:flex bottom-10 z-10 group-hover:z-0 text-[#ffffff] p-4 text-4xl font-bold'>
        {status?.name}{" "}
      </p>
      <img
        alt=''
        src={status?.img}
        className='w-full object-cover brightness-75'
      />
      <div className='overlay absolute left-0 right-0 bottom-0 bg-blue-400  overflow-hidden w-ful h-0 group-hover:h-full ease-in-out duration-300 flex flex-col items-end justify-around'>
        <div className='text '>
          <p className='p-2 text-[] text-white'>{status?.text}</p>
          <p className='bg-black  my-4 text-gray-50 w-fit m-auto p-2 rounded'>
            <Link href='/components/contacts/Contact'> Contact Us</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default OurExpertiseInduvidual;
