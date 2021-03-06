import React from "react";
import Link from "next/link";

function ListItems() {
  return (
    <div
      style={{ backgroundColor: "black" }}
      className={`flex md:hidden  text-white flex-col justify-evenly items-start absolute top-10 bg-gray-50 z-50 px-8  w-full border-2 my-10`}>
      <div className='p-2 '>
        <p></p>
        <h1 className=' text-2xl text-left  font-bold text-blue-600'>
          <Link href='/components/About/About'>About Us</Link>
        </h1>
        <ul className='list-disc text-left '>
          <li className='font-semibold py-1 '> <Link href='/components/About/About'>Happy Customers</Link></li>
          <li className='font-semibold py-1 '> <Link href='/components/About/About'>Case Study</Link></li>
          <li className='font-semibold py-1 '> <Link href='/components/About/About'>Our Gurantees</Link></li>
          <li className='font-semibold py-1 '> <Link href='/components/About/About'>Going Green</Link></li>
          <li className='font-semibold py-1 '> <Link href='/components/About/About'>Contact US</Link></li>
        </ul>
      </div>{" "}
      <div className='bg-pink-400 text-left w-full text-white p-2 mb-4'>
        {/* Unlock the Secret to brand success */}
      </div>
      <div>
        <h1 className=' text-2xl text-left font-bold text-pink-400'>
          <Link href='/components/About/About'> Meet the Team</Link>
        </h1>
        <ul className='list-disclist-style-disc text-left'>
          <ul className='list-disc list-style-disc text-left'>
            <li className='font-semibold py-1 '>
              <Link href='/components/About/0'> David Rusike </Link>
            </li>
            <li className='font-semibold py-1 '>
              <Link href='/components/About/1'> Rose Mudehwe</Link>
            </li>
            {/* <li className='font-semibold py-1 '>Ruth Phiri </li> */}
          </ul>
        </ul>
      </div>
      <div className='bg-blue-400 w-full text-left text-white p-2 mb-4'>
        {/* Unlock the Secret to brand success */}
      </div>
      {/*  */}
      <div className='p-2 '>
        <p></p>
        <h1 className=' text-2xl text-left  font-bold text-blue-400'>
          <Link href='/components/Expertise/Expertise'> Services</Link>
        </h1>
        <ul className='list-disc list-style-disc text-left'>
          <li className='font-semibold py-1 '>
            <Link href='/components/Expertise/Expertise'>
              Advertising Research
            </Link>
          </li>
          <li className='font-semibold py-1 '>
            <Link href='/components/Expertise/Expertise'>Brand Research</Link>
          </li>
          <li className='font-semibold py-1 '>
            <Link href='/components/Expertise/Expertise'>
              Customer Satisfaction Surveys
            </Link>{" "}
          </li>
          <li className='font-semibold py-1 '>
            <Link href='/components/Expertise/Expertise'>
              Industrial Market Research
            </Link>
          </li>
          <li className='font-semibold py-1 '>
            <Link href='/components/Expertise/Expertise'>Media Research</Link>
          </li>
          <li className='font-semibold py-1 '>
            <Link href='/components/contacts/Contact'>Mystery Shopping</Link>
          </li>{" "}
          <li className='font-semibold py-1 '>
            <Link href='/components/contacts/Contact'>Product Development</Link>
          </li>
        </ul>
      </div>{" "}
      <div></div>
      <div className='bg-pink-400 text-left w-full text-white p-2 mb-4'>
        {/* Unlock the Secret to brand success */}
      </div>
      <div className='p-2 px-8'>
        <p></p>
      </div>{" "}
      <div>
        <h1 className=' text-2xl text-left font-bold text-pink-400'>
          {/* Meet the Team */}
        </h1>
      </div>
      <div className='p-2 '>
        <p></p>
        <h1 className=' text-2xl text-left  font-bold text-pink-400'>
          <Link href='/components/Toolbox/Toolbox'> Tool Box</Link>
        </h1>
        <ul className='list-disc list-style-disc text-left'>
          <li className='font-semibold py-1 '>
            <Link href='/components/Toolbox/Toolbox'>Qualitative Research</Link>
          </li>
          
          <li className='font-semibold py-1 '>
            <Link href='/components/Toolbox/Toolbox'>
              Quantitative Research
            </Link>
          </li>
        
          <li className='font-semibold py-1 '>
            <Link href='/components/Toolbox/Toolbox'>Quality Assurance</Link>
          </li>
        </ul>
      </div>{" "}
      <div className='bg-yellow-400 text-left w-full text-white p-2 mb-4'>
        {/* Unlock the Secret to brand success */}
      </div>
      <div className='p-2 '>
        <p></p>
        <h1 className=' text-2xl text-left  font-bold text-yellow-400'>
          <Link href='/components/Resources/resources'> Resources</Link>
        </h1>
        <ul className='list-disc list-style-disc text-left'>
          <li className='font-semibold py-1 '>
            <Link href='/components/Resources/resources'>XRI News</Link>
          </li>
          <li className='font-semibold py-1 '>
            <Link href='/components/Resources/resources'>
              Articles and Whitepaper
            </Link>
          </li>
          <li className='font-semibold py-1 '>
            <Link href='/components/Resources/resources'>Case studies </Link>
          </li>
          <li className='font-semibold py-1 '>
            <Link href='/components/Resources/resources'>
              Research Glossary
            </Link>
          </li>
          <li className='font-semibold py-1 '>
            <Link href='/components/Resources/resources'>Book Reviews</Link>
          </li>
        </ul>
      </div>{" "}
      <div className='bg-purple-400 text-left w-full text-white p-2 mb-4'>
        {/* Unlock the Secret to brand success */}
      </div>
      <div className='p-2 '>
        <p></p>
        <h1 className=' text-2xl text-left  font-bold text-purple-400'>
        <Link href='/components/Lounge/Lounge'>  The Lounge</Link>
        </h1>
        <ul className='list-disc list-style-disc text-left'>
          <li className='font-semibold py-1 '>
            <Link href='/components/Lounge/Lounge'> 
              Welcome to the Lounge
            </Link>
          </li>
          <li className='font-semibold py-1 '>
            <Link href='/components/faq/faqs'>FAQs</Link>
          </li>
          <li className='font-semibold py-1 '>
            <Link href='/components/contacts/Contact'>Get in touch </Link>
          </li>
          <li className='font-semibold py-1 '>
            <Link href='/components/Toolbox/Toolbox'>Members Sign Up</Link>
          </li>
          <li className='font-semibold py-1 '>
            <Link href='/components/Toolbox/Toolbox'>Book Reviews</Link>
          </li>
        </ul>
      </div>{" "}
      <div className='bg-green-400 text-left w-full text-white p-2 mb-4'>
        {/* Unlock the Secret to brand success */}
      </div>
      <div className='p-2 '>
        <p></p>
        <h1 className=' text-2xl text-left  font-bold text-green-400'>
          <Link href='/components/contacts/Contact'> Contact</Link>
        </h1>
        <ul className='list-disc list-style-disc text-left'>
          <li className='font-semibold py-1 '>
          <Link href='/components/contacts/Contact'>       Choose your Office</Link>

          </li>
          <li className='font-semibold py-1 '>
          <Link href='/components/contacts/Contact'>  Harare Office</Link>          </li>
          <li className='font-semibold py-1 '>
            <Link href='/components/contacts/Contact'>Get in touch </Link>
          </li>
          <li className='font-semibold py-1 '>
          <Link href='/components/contacts/Contact'>                Jobs and Taking Part
</Link>
          </li>
          <li className='font-semibold py-1 '>
           <Link href='/components/careers/careers'>Careers at XRI</Link>
          </li>  <li className='font-semibold py-1 '>
           <Link href='/components/careers/careers'>Work Experience</Link>
          </li>
          <li className='font-semibold py-1 '>
           <Link href='/components/careers/careers'>Take part in Research</Link>
          </li>
        </ul>
      </div>{" "}
      <div className='bg-pink-400 text-left w-full text-white p-2 mb-4'>
        {/* Unlock the Secret to brand success */}
      </div>
    </div>
  );
}

export default ListItems;
