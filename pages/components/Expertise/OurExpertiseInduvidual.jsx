import React from "react";

function OurExpertiseInduvidual({status}) {
  return (
    <div>
      <div className='container relative md:w-full group p-0'>
        <p className='absolute  md:block bottom-10 text-white p-4 text-4xl font-bold'>
          {status?.name}{" "}
        </p>
        <img
          alt=''
          src={status?.img}
          className='w-full'
        />
        <div className='overlay absolute left-0 right-0 bottom-0 bg-blue-100  overflow-hidden w-full h-0 group-hover:h-full ease-in-out duration-300 flex flex-col items-end justify-around'>
          <div className='text '>
            <p className='p-2'>
            {status?.text}
            </p>
            <p className='bg-black  my-4 text-gray-50 w-fit m-auto p-2 rounded'>
              Read more
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurExpertiseInduvidual;
