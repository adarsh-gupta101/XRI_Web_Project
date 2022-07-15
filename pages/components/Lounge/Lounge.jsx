import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Expertise from "../Expertise";
import Contact from "../Contact";
import Link from "next/link";
import Head from "next/head";

function Lounge() {
  return (
    <div>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Header />

      <div className='relative h-96'>
        <img src='https://visionone.co.uk/app/uploads/Lounge-Idea-Page-1600x800.jpg' className="h-96 w-full object-cover"/>

        <div className='absolute top-1/2 text-white left-10'>
          <p className='text-2xl md:text-7xl text-blue-500 font-bold'>
            The Lounge
          </p>
          <p className='text-lg md:text-3xl font-semibold'>
            Where Consumers & Brands Meet
          </p>
        </div>
      </div>

      <div className='flex md:flex-row flex-col p-2 md:p-16 justify-center items-center'>
        <div className=' w-3/4 md:w-full'>
          <p className='text-xl font-bold md:text-left text-center text-blue-500'>
            Welcome to The Lounge - the place where consumers and brands meet.
          </p>
          <p className='text-xl text-gray-500 py-2'>
            The Lounge is an online community where you meet like-minded people
            in a place where you can freely express your frank and honest views.
          </p>

          <p className='text-xl text-gray-500 py-2'>
          Many brands are keen to better understand what you think and how you feel. Brands want to listen to your opinions and encourage you to have a say about new concepts and marketing ideas. Organisations want to learn from you and to be challenged. That&apos;s how they find out what people care about the most and what they need to focus on.
          </p>
          <p className='text-xl text-gray-500 py-2'>
          At The Lounge, we like rewarding you for your time and effort, but we also want to make a difference in the world. We are committed to helping make it a better place for everyone and everything.
          </p>
        </div>

        <div className='w-1/4 hidden md:block shadow h-fit p-2 py-4'>
          <p className='bg-pink-500 font-bold text-white p-2 tracking-wide	 text-xl'>
            Welcome to the Lounge
          </p>
          <div className='bg-re-100 mx-8 '>
            <p className='hover:text-blue-400 text-gray-600 p-3 border-x-0 border-t-0 border-2 border-gray-500 font-semibold tracking-wide	text-left text-xl'>
              <Link href='/component/About/About'> Take Part in Surveys</Link>
            </p>
            <p className='hover:text-blue-400 text-gray-600 p-3 border-x-0 border-t-0 border-2 border-gray-500 font-semibold tracking-wide	text-left  text-xl'>
              <Link href='/component/About/1'> Join Our Focus Groups</Link>
            </p>
            <p className='hover:text-blue-400 text-gray-600 p-3 border-x-0 border-t-0 border-2 border-gray-500 font-semibold tracking-wide	text-left  text-xl'>
              <Link href='/component/About/0'> Latest Focus group News </Link>
            </p>
            <p className='hover:text-blue-400 text-gray-600 p-3 border-x-0 border-t-0 border-2 border-gray-500 font-semibold tracking-wide	text-left  text-xl'>
              Get In Touch{" "}
            </p>
            <p className='hover:text-blue-400 text-gray-600 p-3 border-x-0 border-t-0 border-2 border-gray-500 font-semibold tracking-wide	text-left  text-xl'>
              <Link href='/components/Resources/resources'> Resources</Link>
            </p>
          </div>
        </div>
      </div>
      <Expertise />
      <div className=' p-4 md:p-16 '>
        <p className='text-xl font-bold text-pink-500'>How can you help?</p>

        <p className='text-xl text-gray-500 py-2'>
          The Lounge is our online community which has been designed to be a
          user friendly and rewarding experience for all participants. It&apos;s
          a place where the public shares views or comes together to influence
          brands decision making.
        </p>

        <p className='text-xl text-gray-500 py-2'>
          At The Lounge we believe it&apos;s not just about earning incentives,
          we go further by providing you with better rewards. That&apos;s why we
          now offer regular free cash prize draws for every active member! We
          will now be running an annual competition where you can see our top
          participants on our website. More details can be found here.
        </p>
        <p className='font-bold text-gray-600 text-xl text-center p-4 '>
          There are numerous ways you can do to make a difference in The Lounge:
        </p>
        <div className='flex flex-col md:flex-row md:p-8'>
          {" "}
          <div className=' p-4 md:p-8 m-1 bg-blue-500 shadow-2xl shadow-blue-200 hover:shadow-xl'>
            <p className='text-xl font-bold text-white text-center p-4'>
              Online Surveys
            </p>
            <p className='text-xl text-white py-2'>
            Our surveys are simple and easy to complete and participating ensures you remain a member of our community. You will be able to watch unseen TV ads and other videos, review new concepts and products, help design packaging, even have a say in companies logos and other branding elements, and many other activities!
            </p>

            <p className='text-xl text-white py-2'>
            The typical online survey takes between 5 and 10 minutes to complete but can go up to 20 or 25 minutes.    </p>
          </div>
          <div className='p-8 m-1 bg-pink-400 shadow-2xl shadow-pink-200 hover:shadow-xl'>
            <p className='text-xl text-gray-500 py-2'>
              {" "}
              <p className='text-xl font-bold text-gray-50 text-center p-4'>
                Other Research Activities
              </p>
              <p className='text-xl text-white py-2'>
              We also have a wide range of other research methodologies. This includes depth interviews (one-to-one sessions) and focus groups (6+ participants sessions). Importantly, these are open, friendly conversations with our Qualitative Research experts who have 80 years combined experience in hosting and moderating.      </p>
             
            </p>
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default Lounge;
