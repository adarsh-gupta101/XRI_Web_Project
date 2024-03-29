/* eslint-disable @next/next/no-img-element */
import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import Contacts from "../Contact";
import Head from "next/head";

import { AiOutlineMail } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
import Link from "next/link";

function Contact() {
  return (
    <div>
      <Head>
      <link rel="icon" href="/logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffffff" />
        <title>XRI Agency</title>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Header />
      <div>
        <div className='relative h-96'>
          <img
            src='https://visionone.co.uk/app/uploads//Contact-Us-Picture-1600x800.jpg'
            alt=''
            className='brightness-50 h-96 object-cover w-full'
          />
          <div className='absolute bottom-0 md:bottom-40 p-4 shado'>
            <p className='text-4xl md:text-6xl font-bold  text-white text-blue-400 md:mx-8'>
              Tel +263772219600{" "}
            </p>
            <p className='font-semibold text-2xl  text-white md:mx-8'>
              We look forward to hearing from you
            </p>
          </div>
        </div>
      </div>
      <div className='p-8'>
        <p className='text-xl font-bold bg-white text-gray-800'>
          Thank You for Visiting
        </p>
        <p className='py-3 text-lg'>
          Thank you for taking the time to explore XRI, we hope you found
          everything you were looking for. If not, please don&apos;t hesitate to
          get in touch, using our contact form below.
        </p>

        <div>
          <div className='max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900'>
            <div className='rounded-t-lg h-32 overflow-hidden'>
              <img
                className='object-cover object-top w-full'
                src='https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ'
                alt='Mountain'
              />
            </div>
            <div className='mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden'>
              <img
                className='object-cover object-center h-32 w-full'
                src='/assets/david.jpeg'
                alt='Woman looking front'
              />
            </div>
            <div className='text-center mt-2'>
              <h2 className='font-semibold'>David Rusike</h2>
              {/* <p className='text-gray-500'>Freelance Web Designer</p> */}
              <div className=' w-fit flex m-auto text-blue-500'>
                <a
                  className='text-2xl p-2 flex items-center'
                  href='mailto:david.rusike@xri-africa.com'>
                                   <AiOutlineMail className='mx-2' /> <span>Email</span>

                </a>
                <a
                  className='text-2xl p-2 flex items-center'
                  href='tel:+263772219600'>
                  <BsPhone className="mx-2"></BsPhone> <span>Phone</span>
                </a>
              </div>
            </div>

            <div className='p-4 border-t mx-8 mt-2'>
              <button className='w-3/4 md:w-1/2 block mx-auto rounded-full bg-pink-500 hover:shadow-lg font-semibold text-white px-6 py-2'>
                <Link href='/components/About/0'> Read More</Link>
              </button>
            </div>
          </div>

          <div className='max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900'>
            <div className='rounded-t-lg h-32 overflow-hidden'>
              <img
                className='object-cover object-top w-full'
                src='https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ'
                alt='Mountain'
              />
            </div>
            <div className='mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden'>
              <img
                className='object-cover object-center h-32 w-full'
                src='/assets/rose.jpeg'
                alt='Woman looking front'
              />
            </div>
            <div className='text-center mt-2'>
              <h2 className='font-semibold'>Rose Mudehwe</h2>
              <p className='text-gray-500'></p>
              <div className=' w-fit flex m-auto text-blue-500'>
                <a
                  className='text-2xl p-2 flex items-center'
                  href='mailto:rose.mudehwe@xri-africa.com'>
                  <AiOutlineMail className='mx-2' /> <span>Email</span>
                </a>
                <a
                  className='text-2xl p-2 flex items-center'
                  href='tel:+97433927450'>
                  <BsPhone></BsPhone> <span>Phone</span>
                </a>
              </div>
            </div>

            <div className='p-4 border-t mx-8 mt-2'>
              <button className='w-3/4 md:w-1/2 block mx-auto rounded-full bg-pink-500 hover:shadow-lg font-semibold text-white px-6 py-2'>
                <Link href='/components/About/1'> Read More</Link>
              </button>
            </div>
          </div>
        </div>

        <p className='py-3 text-lg mt-8'>
          If you&apos;d rather speak to us directly - we&apos;re a friendly
          bunch - please either call our Harare office.
        </p>
        <p className='py-3 text-lg'>
          You can also write to us - our address details are provided on the
          left-hand side below. We look forward to hearing from you.
        </p>
      </div>
      <Contacts />

      {/* <div>

      </div> */}
      <Footer />
    </div>
  );
}

export default Contact;
