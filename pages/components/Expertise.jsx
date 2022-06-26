import React from "react";

function Expertise() {
  return (
    <div className='flex flex-col md:flex-row p-4'>
      <div className='container relative md:w-1/3 group p-4'>
        <p className='absolute hidden md:block bottom-10 text-white p-4 text-4xl font-bold'>
          Brand Research
        </p>
        <img
          src='https://visionone.co.uk/app/uploads/AdobeStock_294356100-scaled-e1603740428388-600x400.jpeg'
          className=''
        />
        <div className='overlay absolute left-0 right-0 bottom-0 bg-blue-100  overflow-hidden w-full h-0 group-hover:h-full ease-in-out duration-300 flex flex-col items-end justify-around'>
          <div className='text '>
            <p className='p-2'>
              Vision One are experts in Innovation and new product development
              from idea generation to product screening across a wide variety of
              sectors.
            </p>
            <p className='bg-black  my-4 text-gray-50 w-fit m-auto p-2 rounded'>
              Read more
            </p>
          </div>
        </div>
      </div>
      <div className='container relative md:w-1/3 group p-4'>
        <p className='absolute bottom-10  hidden md:block text-white p-4 text-4xl font-bold'>
          International Market and Design
        </p>

        <img src='https://visionone.co.uk/app/uploads/Market-Research-International-Vision-One-e1600756858330-600x400.jpg' />
        <div className='overlay absolute left-0 right-0 bottom-0 bg-blue-100 overflow-hidden w-full h-0 group-hover:h-full ease-in-out duration-300 flex flex-col items-end justify-around'>
          <div className='text '>
            <p className='p-2'>
              Vision One are experts in Innovation and new product development
              from idea generation to product screening across a wide variety of
              sectors.
            </p>
            <p className='bg-black  my-4 text-gray-50 w-fit m-auto p-2 rounded'>
              Read more
            </p>
          </div>
        </div>
      </div>
      <div className='container relative md:w-1/3 group p-4'>
        <p className='absolute bottom-10 text-white p-4 text-4xl  hidden md:block font-bold'>
          Brand Research
        </p>

        <img src='https://visionone.co.uk/app/uploads/Innvation-and-NPD-Vision-One-600x400.jpg' />
        <div className='overlay absolute left-0 right-0 bottom-0 bg-blue-100 overflow-hidden w-full h-0 group-hover:h-full ease-in-out duration-300 flex flex-col items-end justify-around'>
          <div className='text '>
            <p className='p-2'>
              Vision One are experts in Innovation and new product development
              from idea generation to product screening across a wide variety of
              sectors.
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

export default Expertise;
