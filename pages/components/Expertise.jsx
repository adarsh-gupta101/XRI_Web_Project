import React from "react";

function Expertise() {
  return (
    <div className='flex flex-col md:flex-row md:p-4'>
      <div className='container m-auto relative w-4/5 md:w-1/3 group md:p-2'>
        <p className='absolute idden md:block bottom-10 z-10 text-white p-4 text-4xl font-bold'>
          Brand Research
        </p>
        <img
          alt=''
          src='https://images.unsplash.com/photo-1517816428104-797678c7cf0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
          className='brightness-'
        />
        <div className='overlay absolute z-20 left-0 right-0 bottom-0 bg-blue-100  overflow-hidden w-full h-0 group-hover:h-full ease-in-out duration-300 flex flex-col items-end justify-around'>
          <div className='text '>
            <p className='p-2'>
              At XRI we have 80 years of solid market experience combined using
              proven research techiques
            </p>
            <p className='bg-black  my-4 text-gray-50 w-fit m-auto p-2 rounded'>
              Read more
            </p>
          </div>
        </div>
      </div>
      <div className='container m-auto relative w-4/5 md:w-1/3 group my-2 md:p-2'>
        <p className='absolute bottom-10 z-10  hi=dden md:block text-white p-4 text-4xl font-bold'>
          International Market and Design
        </p>

        <img
          alt=''
          className='brightness-5'

          src='https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YnJhbmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
        />
        <div className='overlay absolute left-0 z-20 z right-0 bottom-0 bg-blue-100 overflow-hidden w-full h-0 group-hover:h-full ease-in-out duration-300 flex flex-col items-end justify-around'>
          <div className='text '>
            <p className='p-2'>
              We,XRI, are experts in Innovation and new product development from
              idea generation to product screening across a wide variety of
              sectors.
            </p>
            <p className='bg-black  my-4 text-gray-50 w-fit m-auto p-2 rounded'>
              Read more
            </p>
          </div>
        </div>
      </div>
      <div className='container m-auto relative w-4/5 md:w-1/3 group my-2 md:p-2'>
        <p className='absolute bottom-10 z-10 text-white p-4 text-4xl  idden md:block font-bold'>
          Brand Research
        </p>

        <img
          alt='' className="contain"
          src='https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80'
        />
        <div className='overlay z-20 absolute left-0 right-0 bottom-0 bg-blue-100 overflow-hidden w-full h-0 group-hover:h-full ease-in-out duration-300 flex flex-col items-end justify-around'>
          <div className='text '>
            <p className='p-2'>
              We,XRI, are experts in Innovation and fast in the industry in
              terms of Growth.
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
