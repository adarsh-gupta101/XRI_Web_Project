import React from "react";

function Contact() {
  return (
    <div
      className=''
      style={{
        backgroundImage: ` url(
          "https://images.pexels.com/photos/5418660/pexels-photo-5418660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        )`,
      }}>
      <div className='bg-black/80 text-white p-12 flex flex-col md:flex-row items-center justify-evenly'>
        <div className='md:w-2/5'>
          <h1 className='text-4xl '>Lets have a chat</h1>
          <p>
            If you are curious to know more about how we could work together, or
            how our insights can grow your business, then please give call us on
            0203 693 3150 or use the contact button below.
          </p>
          <p className='text-center bg-green-500 text-white p-2 mt-12'>
            GET IN TOUCH
          </p>
        </div>
        <div className='flex flex-col mt-6 md:mt-0 md:w-2/5'>
          <h1>
            Sign up to the latest news, white papers, events and offers today.
          </h1>
          <input
            className='rounded my-4 p-2 text-black'
            type='email'
            placeholder='Email'
          />{" "}
          <input
            className='rounded my-4 p-2 text-black'
            type='number'
            placeholder='Number'
          />{" "}
          <input
            className='rounded my-4 p-2 text-black'
            type='text'
            placeholder='First Name'
          />
          <input
            className='rounded my-4 p-2 text-black'
            type='text'
            placeholder='Last Name'
          />
          <p className='text-center bg-green-500 text-white p-2'>Submit</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
