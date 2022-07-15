import Link from "next/link";
import React from "react";

const data = [
  {
    name: "Business Development Opportunity",
    desc: "At XRI we’re always looking to expand our team of experts. Currently, we are looking to grow our Business Development team in the Southern Africa region to cope with the high… ",

    img: "https://images.pexels.com/photos/935949/pexels-photo-935949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Market research job opportunities in our Harare Office",
    desc: "Are you after a career in research? We are offering the opportunity of a market research job in two of our companies departments!",

    img: "https://images.pexels.com/photos/1181615/pexels-photo-1181615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Are you looking for an Exciting career?",
    desc: " Are you looking for an exciting career? We’re expanding our established team with candidates with proven track record of success in sales.  ",

    img: "https://images.pexels.com/photos/1181226/pexels-photo-1181226.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Business Development Opportunity",
    desc: "At XRI we’re always looking to expand our team of experts. Currently, we are looking to grow our Business Development team in the Southern Africa region to cope with the high… ",

    img: "https://images.pexels.com/photos/935949/pexels-photo-935949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Market research job opportunities in our Harare Office",
    desc: "Are you after a career in research? We are offering the opportunity of a market research job in two of our companies departments!",

    img: "https://images.pexels.com/photos/1181615/pexels-photo-1181615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Are you looking for an Exciting career?",
    desc: " Are you looking for an exciting career? We’re expanding our established team with candidates with proven track record of success in sales.  ",

    img: "https://images.pexels.com/photos/1181226/pexels-photo-1181226.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];
function Jobs() {
  return (
    <div>
      <p className='text-4xl p-4 text-center mt-8 font-bold text-pink-500 '>
        Research Jobs
      </p>
      <div className='flex flex-column md:flex-row flex-wrap items-center justify-evenly p-4'>
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className='bg-black text-white p-2 m-2 md:w-1/4 shadow-2xl shadow-blue-300'>
              <img src={item.img} />
              <h1 className='font-bold p-2 text-xl'>{item.name}</h1>
              <p className='text-sm'>{item.desc}</p>
              <p className='text-black bg-white rounded-2xl px-3 font-bold hover:bg-black hover:text-white hover:border-2 hover:border-white p-2 my-2 w-fit m-auto'>
                {" "}
                <Link href='/components/contacts/Contact'> Contact Us</Link>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Jobs;
