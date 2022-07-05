import React from "react";

import p1 from "../../public/assets/clients/1.png";
import p2 from "../../public/assets/clients/2.png";
import p3 from "../../public/assets/clients/3.png";
import p4 from "../../public/assets/clients/4.jpg";
import p5 from "../../public/assets/clients/5.png";
import p6 from "../../public/assets/clients/6.jpg";
import p7 from "../../public/assets/clients/7.png";
import p8 from "../../public/assets/clients/8.jpg";
import p9 from "../../public/assets/clients/9.png";

const data=[p1,p2,p3,p4,p5,p6,p7,p8,p9];

function Clients() {
  return (
    <div className='client relative h-fit  '>
      <img
        alt=''
        src='https://images.pexels.com/photos/347682/pexels-photo-347682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        className='w-full h-full brightness-50'
      />
      <div className='absolute top-0 md:p-16 flex flex-col justify-evenly h-full'>
        <p className='text-4xl pt-6 font-bold text-white text-center md:text-left'>
          Clients
        </p>
        <p className='text-white md:mt-16 text-center md:text-left'>
          We are delighted to have worked with many brands across the world and
          are immensely proud of the reputation and strong long-term
          relationships we have built with our clients.
        </p>
        <div className='flex justify-center items-center flex-wrap w-full h-full'>
        {data.map((item,index)=>{
          // console.log(item.src)
          return(
            <div key={index} className='p-2 md:p-8 group flex flex-col justify-between text-center items-center'>
            <img
              alt=''
              src={item.src}
              className='w-24 h-24 md:w-32 md:h-32 object-contain  contain'
            />
            <div className='text-white hidden ease-in-out duration-200 md:group-hover:block'>
              {/* <h1 className='text-sm'>Washing Machines Need Love!</h1> */}
              <p className='text-sm'>
                Our Esteemed Customer
              </p>
            </div>
          </div>
          )
        })}
        </div>

        {/* <div className='flex justify-center items-center flex-wrap w-full h-full'>
          <div className='md:w-1/3 md:h-1/3 group flex flex-col justify-between text-center items-center'>
            <img
              alt=''
              src='https://visionone.co.uk/app/uploads/Dr-Beckmann-logo-lite-400x285.png'
              className='w-32 h-32 object-contain'
            />
            <div className='text-white hidden ease-in-out duration-200 md:group-hover:block'>
              <h1 className='text-sm'>Washing Machines Need Love!</h1>
              <p className='text-sm'>
                Developing and refining a new and successful laundry care
                product for European markets
              </p>
            </div>
          </div>

          <div className='md:w-1/3 md:h-1/3 group flex flex-col justify-between text-center items-center'>
            <img
              alt=''
              className='w-32 h-32 object-contain'
              src='https://visionone.co.uk/app/uploads/Logo-for-FSB-400x286.png'
            />
            <div className='text-white hidden ease-in-out duration-200 md:group-hover:block'>
              <h1>Washing Machines Need Love!</h1>
              <p className='text-sm'>
                Developing and refining a new and successful laundry care
                product for European markets
              </p>
            </div>
          </div>
          <div className='md:w-1/3 md:h-1/3 group flex flex-col justify-between text-center items-center'>
            <img
              alt=''
              className='w-32 h-32 object-contain'
              src='https://visionone.co.uk/app/uploads/Loreal-Paris-400x286.png'
            />
            <div className='text-white hidden ease-in-out duration-200 md:group-hover:block'>
              <h1>Washing Machines Need Love!</h1>
              <p className='text-sm'>
                Developing and refining a new and successful laundry care
                product for European markets
              </p>
            </div>
          </div>
          <div className='md:w-1/3 md:h-1/3 group flex flex-col justify-between text-center items-center'>
            <img
              alt=''
              className='w-32 h-32 object-contain'
              src='https://visionone.co.uk/app/uploads/Silentnight-Logo-Line-Art-400x229.png'
            />

            <div className='text-white hidden ease-in-out duration-200 md:group-hover:block'>
              <h1>Washing Machines Need Love!</h1>
              <p className='text-sm'>
                Developing and refining a new and successful laundry care
                product for European markets
              </p>
            </div>
          </div>
          <div className='md:w-1/3 md:h-1/3 group flex flex-col justify-between text-center items-center'>
            <img
              alt=''
              className='w-32 h-32 object-contain'
              src='https://visionone.co.uk/app/uploads/Dr-Beckmann-logo-lite-400x285.png'
            />

            <div className='text-white hidden ease-in-out duration-200 md:group-hover:block'>
              <h1>Washing Machines Need Love!</h1>
              <p className='text-sm'>
                Developing and refining a new and successful laundry care
                product for European markets
              </p>
            </div>
          </div>
          <div className='md:w-1/3 md:h-1/3 group flex flex-col justify-between text-center items-center'>
            <img
              alt=''
              className='w-32 h-32 object-contain'
              src='https://visionone.co.uk/app/uploads/Logo-for-FSB-400x286.png'
            />

            <div className=' text-white hidden  ease-in-out duration-200 md:group-hover:block smk'>
              <h1>Washing Machines Need Love!</h1>
              <p className='text-sm'>
                Developing and refining a new and successful laundry care
                product for European markets
              </p>
            </div>
          </div>
        </div> */}
        <p className='text-3xl p-2 md:text-5xl font-bold text-white text-center'>
          <span className='text-blue-500'>We Research</span>,
          <span className='text-pink-500'>We Think</span>,We Innovate
        </p>
      </div>

      <img alt='' src='/assets/hr.svg' />
    </div>
  );
}

export default Clients;
