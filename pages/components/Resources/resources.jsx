import Head from "next/head";
import Link from "next/link";
import React from "react";
import Contact from "../Contact";
import Footer from "../Footer";
import Header from "../Header";

const data = [
  {
    name: "The inevitable rise in Meat-free ",
    img: "https://images.unsplash.com/photo-1588600878108-578307a3cc9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80",
    desc: "The inevitable rise in Meat-free  & lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    img: "https://images.unsplash.com/photo-1581087725018-45eb42ace6eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzl8fGJsYWNrJTIwcmVzZWFyY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    name: "Our Sustainable promise",
    desc: "Lorem 25",
  },
  {
    name: "The inevitable rise in Meat-free ",
    img: "https://images.unsplash.com/photo-1573164574048-f968d7ee9f20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGJsYWNrJTIwcmVzZWFyY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    desc: "The inevitable rise in Meat-free  & lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    img: "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    name: "Our Sustainable promise",
    desc: "Lorem 25",
  },
  {
    name: "The inevitable rise in Meat-free ",
    img: "https://images.unsplash.com/photo-1518186233392-c232efbf2373?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJsYWNrJTIwcmVzZWFyY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    desc: "The inevitable rise in Meat-free  & lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    img: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHJlc2VhcmNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Our Sustainable promise",
    desc: "Lorem 25",
  },
];
function Resources() {
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

      <div className='relative '>
        <video autoPlay loop className=''>
          <source src='https://visionone.co.uk/app/uploads/Market-Research-News.mp4' />
        </video>
        <div className='absolute top-1/2 text-8xl'>
          <p className='text-4xl md:text-8xl font-bold text-pink-600 md:px-2 shadow-2xl shadow-blue-200 ml-8'>
            XRI News
          </p>
        </div>
      </div>
      <div className='flex md:flex-row flex-col flex-wrap m-12   justify-center items-center'>
        {data.map((key, value) => {
          return (
            <div key={value} className='md:w-1/3 bg-black '>
              <img src={key.img} alt='' className=''></img>
              <p className='text-white p-4 text-xl text-center'>{key.name}</p>

              <p className='bg-pink-800  my-4 text-gray-50 w-fit m-auto p-2 rounded'>
                <Link href='/components/contacts/Contact'> Contact US </Link>{" "}
              </p>
            </div>
          );
        })}
      </div>

      <Contact />
      <Footer />
    </div>
  );
}

export default Resources;
