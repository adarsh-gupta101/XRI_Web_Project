import React, { useState } from "react";
import Hamburger from "hamburger-react";

import { BsSearch } from "react-icons/bs";
import ListItems from "./ListItems";
// import About from "./About/About";
import Link from "next/link";

function Header({ pos }) {
  const [isAbout, setAbout] = useState(true);
  const [isOpen, setOpen] = useState(false);

  const [isContact, setContact] = useState(true);
  // if(MouseEvent.)
  return (
    <div
      className={`md:relative z-50 w-full `}
      style={{ fontFamily: "Open Sans" }}>
      <div className=' bg-white flex md:flex h-32 justify-between md:justify-evenly items-center'>
        <Link href='/'>
          <img
            alt=' '
            src='/assets/XRI.png'
            className='w-1/3 md:w-2/12 z-50 md:h-4/5 object-contain cursor-pointer'
          />
        </Link>
        <ul className='block md:hidden  z-50'>
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </ul>

        <ul className=' justify-evenly items-center md:w-8/12  font-bold text-lg text-gray-600 hidden md:flex'>
          <li className='hover:border-blue-400 h-24 pt-10 border-white ease-in-out duration-300  border-4 border-r-0 border-t-0 border-l-0 group '>
            <Link href='/'> Home</Link>
          </li>
          <li className='hover:border-blue-400 h-24 pt-10 ease-in-out duration-300 border-white   border-4 border-r-0 border-t-0 border-l-0 group'>
            <Link href='/components/About/About'> About</Link>
            <div
              className={` w-full md:mt-16 hover:border-t-4 hover:border-blue-400 hover:border-x-0 hover:border-b-0 hover:block top-12 pt-10 duration-500 bg-hite z-20 absolute  left-0 hidden bg-white group-hover:block `}>
              <div
                className={`flex justify-evenly items-start transition ease-in-out delay-150`}>
                <img
                  src='https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80'
                  className='m-2 w-72'
                />
                <div>
                  <h1 className=' text-3xl text-left font-bold text-gray-600'>
                    About
                  </h1>
                  <ul className='text-base font-semibold text-left'>
                   <li className='font-semibold py-1 '>
                      <Link href='/components/About/About'>
                        Happy Customers
                      </Link>
                    </li>
                   <li className='font-semibold py-1 '>
                      <Link href='/components/About/About'>Case Study</Link>
                    </li>
                   <li className='font-semibold py-1 '>
                      <Link href='/components/About/About'>Our Gurantees</Link>
                    </li>
                   <li className='font-semibold py-1 '>
                      <Link href='/components/About/About'>Going Green</Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h1 className=' text-3xl font-bold text-gray-600'>
                    Meet the Team
                  </h1>
                  <ul className='text-base font-semibold text-left'>
                   <li className='font-semibold py-1 '>
                      <Link href='/components/About/0'> David Rusike</Link>
                    </li>
                   <li className='font-semibold py-1 '>Ruth Phiri</li>
                   <li className='font-semibold py-1 '>
                      <Link href='/components/About/1'> Rose Mudehwe</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='bg-blue-800 text-center text-white p-2'>
                Unlock the Secret to brand success
              </div>
            </div>
          </li>

          <li
            className='hover:border-blue-400 h-24 pt-10 ease-in-out duration-300 border-white   border-4 border-r-0 border-t-0 border-l-0 group'
            onMouseEnter={() => {
              setContact(!isContact);
            }}>
            <Link href='/components/Expertise/Expertise'> Services</Link>
            <div
              className={` w-full md:mt-16 hover:border-t-4 hover:border-blue-400 bg-lack hover:border-x-0 hover:border-b-0 hover:block top-12 pt-10 duration-500 bg-hite z-20 absolute  left-0 hidden bg-white group-hover:block `}>
              <div
                className={`flex justify-evenly items-start transition ease-in-out delay-150`}>
                <img
                  src='https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80'
                  className='m-2 w-64'
                />
                <div>
                  <h1 className=' text-3xl font-bold text-gray-600'>
                    Services
                  </h1>
                  <ul className='text-base font-semibold text-left'>
                    <li className='font-semibold py-1'>
                      <Link href='/components/Expertise/Expertise'>
                        Advertising Research
                      </Link>
                    </li>
                    <li className='font-semibold py-1'>
                      <Link href='/components/Expertise/Expertise'>
                        Brand Research
                      </Link>
                    </li>
                    <li className='font-semibold py-1'>
                    <Link href='/components/Expertise/Expertise'>Industrial Market Research
</Link>
                    </li>

                    <li className='font-semibold py-1'>
                    <Link href='/components/Expertise/Expertise'>Media Research
</Link>
                    </li>
                    <li className='font-semibold py-1'>
                    <Link href='/components/contacts/Contact'>Mystery Shopping
</Link>
                    </li>
                    <li className="font-semibolde py-1">
                    <Link href='/components/contacts/Contact'>Product Development
</Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h1 className=' text-3xl font-bold text-gray-600'>
                    Meet the Team
                  </h1>
                  <ul className='text-base font-semibold text-left'>
                   <li className='font-semibold py-1 '>
                      <Link href='/components/About/0'> David Rusike</Link>
                    </li>
                   <li className='font-semibold py-1 '>Ruth Phiri</li>
                   <li className='font-semibold py-1 '>
                      <Link href='/components/About/1'> Rose Mudehwe</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='bg-pink-800 text-center text-white p-2'>
                Unlock the Secret to brand success
              </div>
            </div>
          </li>

          <li className='group hover:border-blue-400 h-24 pt-10 ease-in-out duration-300 border-white  border-4 border-r-0 border-t-0 border-l-0'>
            <Link href='/components/Toolbox/Toolbox'> Tool Box</Link>
            <div
              className={` w-full md:mt-16 hover:border-t-4 hover:border-blue-400 hover:border-x-0 hover:border-b-0 hover:block top-12 pt-10 duration-500 bg-hite z-20 absolute  left-0 hidden bg-white group-hover:block `}>
              <div
                className={`flex justify-evenly items-start transition ease-in-out delay-150`}>
                <img
                  src='https://images.unsplash.com/photo-1588600878108-578307a3cc9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80'
                  className='m-2 w-64'
                />
                <div>
                  <h1 className=' text-3xl font-bold text-gray-600'>
                    Qualitative Research
                  </h1>
                  <ul className='text-base font-semibold text-left'>
                   <li className='font-semibold py-1 '>
                      <Link href='/components/About/About'>
                        Happy Customers
                      </Link>
                    </li>
                   {/* <li className='font-semibold py-1 '>
                      <Link href='/components/About/About'>Case Study</Link>
                    </li> */}
                    <li className='font-semibold py-1 '>
                      <Link href='/components/Toolbox/Toolbox'>
                        Quantitative Research
                      </Link>
                    </li>
                   {/* <li className='font-semibold py-1 '>
                      <Link href='/components/About/About'>
                        <Link href='/components/Toolbox/Toolbox'>
                          Brand Research
                        </Link>
                      </Link>
                    </li> */}
                   <li className='font-semibold py-1 '>Contact US</li>
                  </ul>
                </div>
                <div>
                  <h1 className=' text-3xl font-bold text-gray-600'>
                    Meet the Team
                  </h1>
                  <ul className='text-base font-semibold text-left'>
                   <li className='font-semibold py-1 '>
                      <Link href='/components/About/0'> David Rusike</Link>
                    </li>
                   <li className='font-semibold py-1 '>Ruth Phiri</li>
                   <li className='font-semibold py-1 '>
                      <Link href='/components/About/1'> Rose Mudehwe</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='bg-pink-800 text-center text-white p-2'>
                Unlock the Secret to brand success
              </div>
            </div>
          </li>

          <li
            className='hover:border-blue-400 h-24 pt-10 ease-in-out duration-300 border-white   border-4 border-r-0 border-t-0 border-l-0 group'
            onMouseEnter={() => {
              setContact(!isContact);
            }}>
            <Link href='/components/Resources/resources'> Resources</Link>

            <div
              className={` w-full md:mt-16 hover:border-t-4 hover:border-blue-400 hover:border-x-0 hover:border-b-0 hover:block top-12 pt-10 duration-500 bg-hite z-20 absolute  left-0 hidden bg-white group-hover:block `}>
              <div
                className={`flex justify-evenly items-start transition ease-in-out delay-150`}>
                <img
                src="/assets/res.jpg"
                  // src='https://images.unsplash.com/photo-1588600878108-578307a3cc9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80'
                  className='m-2 w-64'
                />
                <div>
                  <h1 className=' text-3xl font-bold text-gray-600'>
                    Resources
                  </h1>
                  <ul className='text-base font-semibold text-left'>
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
            <Link href='/components/Resources/resources'>Research Glossary</Link>
          </li>
          <li className='font-semibold py-1 '>
            <Link href='/components/Resources/resources'>Book Reviews</Link>
          </li>
                  </ul>
                </div>
                <div>
                  <h1 className=' text-3xl font-bold text-gray-600'>
                    Buisness and B2B
                  </h1>
                  <ul className='text-base font-semibold text-left'>
                   <li className='font-semibold py-1 '>Buisness Strategy</li>
                   <li className='font-semibold py-1 '>Buisness Analysis</li>
                   <li className='font-semibold py-1 '>Business Hugene</li>
                  </ul>
                </div>
              </div>
              <div className='bg-yellow-800 text-center text-white p-2'>
                Unlock the Secret to brand success
              </div>
            </div>
          </li>

          <li className='hover:border-blue-400 h-24 pt-10 ease-in-out duration-300 border-white group  border-4 border-r-0 border-t-0 border-l-0'>
            <Link href='/components/Lounge/Lounge'> Lounge</Link>
            <div
              className={` w-full md:mt-16 hover:border-t-4 hover:border-blue-400 hover:border-x-0 hover:border-b-0 hover:block top-12 pt-10 duration-500 bg-hite z-20 absolute  left-0 hidden bg-white group-hover:block `}>
              <div
                className={`flex justify-evenly items-start transition ease-in-out delay-150`}>
                <img
                  src='https://images.unsplash.com/photo-1588600878108-578307a3cc9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80'
                  className='m-2 w-64'
                />
                <div>
                  <h1 className=' text-3xl font-bold text-gray-600'>
                    Consumer & Brands
                  </h1>
                  <ul className='text-base font-semibold text-left'>
                    <li className='font-semibold py-1 '>
                    <Link href='/components/Toolbox/Toolbox'>Get in touch </Link>
                    </li>
                    <li className='font-semibold py-1 '>
                    <Link href='/components/Toolbox/Toolbox'>Members Sign IN</Link>

                    </li>
                    <li className='font-semibold py-1 '>
                      <Link href='/components/Toolbox/Toolbox'>
                        Members Sign Up
                      </Link>
                    </li>
                    <li className='font-semibold py-1 '>
                      <Link href='/components/Toolbox/Toolbox'>
                        Book Reviews
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h1 className=' text-3xl font-bold text-gray-600'>
                    Buisness and B2B
                  </h1>
                  <ul className='text-base font-semibold text-left'>
                   <li className='font-semibold py-1 '>Buisness Strategy</li>
                   <li className='font-semibold py-1 '>Buisness Analysis</li>
                   <li className='font-semibold py-1 '>Business Hugene</li>
                  </ul>
                </div>
              </div>
              <div className='bg-yellow-800 text-center text-white p-2'>
                Unlock the Secret to brand success
              </div>
            </div>
          </li>

          <li className='group hover:border-blue-400 h-24 pt-10 ease-in-out duration-300  border-white  border-4 border-r-0 border-t-0 border-l-0'>
            <Link href='/components/contacts/Contact'> Contact</Link>
            <div
              className={` w-full md:mt-16 hover:border-t-4 hover:border-blue-400 hover:border-x-0 hover:border-b-0 hover:block top-12 pt-10 duration-500 bg-hite z-20 absolute  left-0 hidden bg-white group-hover:block `}>
              <div
                className={`flex justify-evenly items-start transition ease-in-out delay-150`}>
                <img
                  src='https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                  className='m-2 w-64'
                />
                <div>
                  <h1 className=' text-3xl font-bold text-gray-600'>
                    Choose your Office
                  </h1>
                  <ul className='text-base font-semibold text-left'>
                   <li className='font-semibold py-1 '>Harare Office</li>
                    {/*<li className='font-semibold py-1 '>More to come...</li>
                   <li className='font-semibold py-1 '>More to come...</li>
                   <li className='font-semibold py-1 '>More to come...</li> */}

                   <li className='font-semibold py-1 '>Contact US</li>
                  </ul>
                </div>
                {/* <div>
                  <h1 className=' text-3xl font-bold text-gray-600'>
                    Jobs and Taking Part
                  </h1>
                  <ul className='text-base font-semibold text-left'>
                   <li className='font-semibold py-1 '>We build</li>
                   <li className='font-semibold py-1 '>We Generate</li>
                   <li className='font-semibold py-1 '>We Learn</li>
                   <li className='font-semibold py-1 '>We Research</li>
                  </ul>
                </div> */}
              </div>
              <div className='bg-black text-center text-white p-2'>
                Unlock the Secret to brand success
              </div>
            </div>
          </li>

          <li className='hover:border-blue-400 ease-in-out duration-300 border-white  border-4 border-r-0 border-t-0 border-l-0'>
            <BsSearch></BsSearch>
          </li>
        </ul>
        {isOpen && <ListItems />}
      </div>

      <p className='md:block bg-blue-500  text-white text-center md:p-4 p-4'>
        XRI - Zimbabwe based Market Research Agency
      </p>
    </div>
  );
}

export default Header;
