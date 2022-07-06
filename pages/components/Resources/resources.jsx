import Head from "next/head";
import React from "react";
import Contact from "../Contact";
import Footer from "../Footer";
import Header from "../Header";

const data = [
  {
    name: "The inevitable rise in Meat-free ",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    desc: "The inevitable rise in Meat-free  & lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    img: "https://visionone.co.uk/app/uploads/Our-Sustainability-Video-Vision-One-600x400.jpg",
    name: "Our Sustainable promise",
    desc: "Lorem 25",
  },
  {
    name: "The inevitable rise in Meat-free ",
    img: "https://visionone.co.uk/app/uploads/Plant-Based-Study-Vision-One-600x400.jpg",
    desc: "The inevitable rise in Meat-free  & lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    img: "https://visionone.co.uk/app/uploads/Our-Sustainability-Video-Vision-One-600x400.jpg",
    name: "Our Sustainable promise",
    desc: "Lorem 25",
  },
  {
    name: "The inevitable rise in Meat-free ",
    img: "https://visionone.co.uk/app/uploads/Plant-Based-Study-Vision-One-600x400.jpg",
    desc: "The inevitable rise in Meat-free  & lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    img: "https://visionone.co.uk/app/uploads/Our-Sustainability-Video-Vision-One-600x400.jpg",
    name: "Our Sustainable promise",
    desc: "Lorem 25",
  },
];
function Resources() {
  return (
    <div>
       <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
      </Head>
      <Header />

      <div className='relative '>
        <video autoPlay loop className=''>
          <source src='https://visionone.co.uk/app/uploads/Market-Research-News.mp4' />
        </video>
        <div className='absolute top-1/2 text-8xl'>
          <p className='text-4xl md:text-8xl font-bold text-white ml-8'>XRI News</p>
        </div>
      </div>
      <div className='flex md:flex-row flex-col flex-wrap m-12   justify-center items-center'>
        {data.map((key, value) => {
          return (
            <div key={value} className='md:w-1/3 bg-black'>
              <img src={key.img} alt='' className=''></img>
              <p className='text-white p-4 text-xl text-center'>{key.name}</p>

              <p className='bg-pink-800  my-4 text-gray-50 w-fit m-auto p-2 rounded'>
                Read more
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
