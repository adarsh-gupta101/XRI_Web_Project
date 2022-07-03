import React from "react";
import Link from "next/link";

function ListItems() {
  return (
    <div
      className={`flex flex-col justify-evenly items-center absolute top-10 bg-gray-50 z-50 px-8 w-full border-2 my-8`}>
      <div className='p-2 px-8'>
        <p></p>
        <h1 className=' text-2xl text-center  font-bold text-blue-600'>
          <Link href='/components/About/About'>About Us</Link>
        </h1>
        <ul className='text-center'>
          <li className='font-semibold'>Happy Customers</li>
          <li className='font-semibold'>Case Study</li>
          <li className='font-semibold'>Our Gurantees</li>
          <li className='font-semibold'>Going Green</li>
          <li className='font-semibold'>Contact US</li>
        </ul>
      </div>{" "}
      <div className='bg-pink-400 text-center w-full text-white p-2 mb-4'>
        {/* Unlock the Secret to brand success */}
      </div>
      <div>
        <h1 className=' text-2xl text-center font-bold text-pink-600'>
          <Link href='/components/About/About'> Meet the Team</Link>
        </h1>
        <ul className='text-center'>
          <ul className='text-center'>
            <li className='font-semibold'>
              <Link href='/components/About/0'> David Rusike </Link>
            </li>
            <li className='font-semibold'>
              <Link href='/components/About/1'> Rose Mudehwe</Link>
            </li>
            <li className='font-semibold'>Ruth Phiri </li>
          </ul>
        </ul>
      </div>
      <div className='bg-blue-400 w-full text-center text-white p-2'>
        {/* Unlock the Secret to brand success */}
      </div>
      {/*  */}
      <div className='p-2 px-8'>
        <p></p>
        <h1 className=' text-2xl text-center  font-bold text-gray-600'>
          <Link href='/components/Expertise/Expertise'> Services</Link>
        </h1>
        <ul className='text-center'>
          <li className='font-semibold'>
            <Link href='/components/Expertise/Expertise'>
              Advertising Research
            </Link>
          </li>
          <li className='font-semibold'>
            <Link href='/components/Expertise/Expertise'>Brand Research</Link>
          </li>
          <li className='font-semibold'>
            <Link href='/components/Expertise/Expertise'>
              Product Development
            </Link>{" "}
          </li>
          <li className='font-semibold'>
            <Link href='/components/Expertise/Expertise'>Going Green</Link>
          </li>
          <li className='font-semibold'>
            <Link href='/components/Expertise/Expertise'>Concept Testing</Link>
          </li>
          <li className='font-semibold'>
            <Link href='/components/contacts/Contact'> Contact US</Link>
          </li>
        </ul>
      </div>{" "}
      <div></div>
      <div className='bg-pink-400 text-center w-full text-white p-2 mb-4'>
        {/* Unlock the Secret to brand success */}
      </div>
      <div className='p-2 px-8'>
        <p></p>
      </div>{" "}
      <div>
        <h1 className=' text-2xl text-center font-bold text-gray-600'>
          {/* Meet the Team */}
        </h1>
      </div>
      <div className='p-2 px-8'>
        <p></p>
        <h1 className=' text-2xl text-center  font-bold text-gray-600'>
          <Link href='/components/Toolbox/Toolbox'> Tool Box</Link>
        </h1>
        <ul className='text-center'>
          <li className='font-semibold'>
            <Link href='/components/Toolbox/Toolbox'>Qualitative Research</Link>
          </li>
          <li className='font-semibold'>
            <Link href='/components/Toolbox/Toolbox'>Case Study</Link>
          </li>
          <li className='font-semibold'>
            <Link href='/components/Toolbox/Toolbox'>
              Quantitative Research
            </Link>
          </li>
          <li className='font-semibold'>
            <Link href='/components/Toolbox/Toolbox'>Brand Research</Link>
          </li>
          <li className='font-semibold'>
            <Link href='/components/Toolbox/Toolbox'>Quality Assurance</Link>
          </li>
        </ul>
        
      </div>{" "}
      <div className='bg-yellow-400 text-center w-full text-white p-2 mb-4'>
        {/* Unlock the Secret to brand success */}
      </div>
      <div className='p-2 px-8'>
        <p></p>
        <h1 className=' text-2xl text-center  font-bold text-gray-600'>
          <Link href='/components/Resources/resources'> Resources</Link>
        </h1>
        <ul className='text-center'>
          <li className='font-semibold'>
            <Link href='/components/Resources/resources'>XRI News</Link>
          </li>
          <li className='font-semibold'>
            <Link href='/components/Resources/resources'>
              Articles and Whitepaper
            </Link>
          </li>
          <li className='font-semibold'>
            <Link href='/components/Resources/resources'>Case studies </Link>
          </li>
          <li className='font-semibold'>
            <Link href='/components/Resources/resources'>Research Glossary</Link>
          </li>
          <li className='font-semibold'>
            <Link href='/components/Resources/resources'>Book Reviews</Link>
          </li>
        </ul>
      </div>{" "}  <div className='bg-purple-400 text-center w-full text-white p-2 mb-4'>
        {/* Unlock the Secret to brand success */}
      </div>
      <div className='p-2 px-8'>
        <p></p>
        <h1 className=' text-2xl text-center  font-bold text-gray-600'>
          <Link href='/components/Toolbox/Toolbox'> The Lounge</Link>
        </h1>
        <ul className='text-center'>
          <li className='font-semibold'>
            <Link href='/components/Toolbox/Toolbox'>Welcome to the Lounge</Link>
          </li>
          <li className='font-semibold'>
            <Link href='/components/Toolbox/Toolbox'>
             FAQs
            </Link>
          </li>
          <li className='font-semibold'>
            <Link href='/components/Toolbox/Toolbox'>Get in touch </Link>
          </li>
          <li className='font-semibold'>
            <Link href='/components/Toolbox/Toolbox'>Members Sign Up</Link>
          </li>
          <li className='font-semibold'>
            <Link href='/components/Toolbox/Toolbox'>Book Reviews</Link>
          </li>
        </ul>
      </div>{" "}
      <div className='bg-green-400 text-center w-full text-white p-2 mb-4'>
        {/* Unlock the Secret to brand success */}
      </div>
      <div className='p-2 px-8'>
        <p></p>
        <h1 className=' text-2xl text-center  font-bold text-gray-600'>
          <Link href='/components/contacts/Contact'> Contact</Link>
        </h1>
      </div>{" "}
      <div className='bg-pink-400 text-center w-full text-white p-2 mb-4'>
        {/* Unlock the Secret to brand success */}
      </div>
    </div>
  );
}

export default ListItems;
