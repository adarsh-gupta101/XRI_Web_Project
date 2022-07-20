import React from "react";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineDown,
} from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
import Purpose from "./Purpose";

function Footer() {
  const [state, setState] = React.useState();
  return (
    <div>
      <p
        className='md:hidden flex items-center text-center justify-center'
        style={{ background: "#e1e1e1" }}>
        Expert Research Insights{" "}
        <AiOutlineDown onClick={() => setState(!state)} className='mx-2' />
      </p>
      {state ? <Purpose /> : ""}
      <div
        className='flex flex-col md:flex-row justify-evenly py-28 object-cover text-white items-center md:items-start '
        style={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          background: "#e1e1e1",
          // backgroundImage:
          //   "url(https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80)",
        }}>
        {/* Adress */}
        <p className='text-8xl font-bold bg-pink-500 text-white p-4 rounded-2xl shadow-2xl'>
          XRI
        </p>
        <div className='my-4 md:my-0 text-center md:text-left'>
          <p className='text-blue-500 bg-whie text-2xl mt-10 md:mt-0 font-bold'>
            Head Office (Harare)
          </p>
          <div className='text-gray-500 text-lg'>
            <p className='list-style-none'>832 New Adylinn, Westgate </p>
            <p>Harare, Zimbabwe </p>
          </div>
          <div className='mt-8 flex bg-wite items-center '>
            <img
              src='/assets/david.jpeg'
              className='w-12 h-12 rounded-full object-cover'
            />
            <div className='text-lg font-medium'>
              <a
                href='mailto:david.rusike@xri-africa.com '
                className='text-gray-600 flex items-center'>
                {" "}
                <AiOutlineMail className='mx-2 text-pink-500' />{" "}
                <span> david.rusike@xri-africa.com</span>{" "}
              </a>
              <a
                href='tel:+263772219600 '
                className='text-gray-600 flex items-center'>
                {" "}
                <BsPhone className='mx-2 text-pink-500' />{" "}
                <span> +263772219600</span>{" "}
              </a>
            </div>
          </div>

          <div className='mt-4 flex items-center bg-wite text-pink-900'>
            <img
              src='/assets/Rose.jpeg'
              className='w-12 h-12 rounded-full object-cover'
            />
            <div className='text-lg font-medium'>
              <a
                href='mailto:rose.mudehwe@xri-africa.com '
                className='text-gray-600 flex items-center'>
                {" "}
                <AiOutlineMail className='mx-2 text-pink-500' />{" "}
                <span> rose.mudehwe@xri-africa.com</span>{" "}
              </a>
              <a
                href='tel:+263772219600 '
                className='text-gray-600 flex items-center'>
                {" "}
                <BsPhone className='mx-2 text-pink-500' />{" "}
                <span> +97433927450</span>{" "}
              </a>
            </div>
            <div></div>
          </div>

          <div className='flex justify-between items-center my-6 md:my-8 bg-red-00 '>
            <AiFillInstagram className='text-4xl text-pink-500'></AiFillInstagram>
            <AiFillTwitterCircle className='text-blue-500 text-4xl'></AiFillTwitterCircle>
            <AiFillLinkedin className='text-blue-600 text-4xl'></AiFillLinkedin>
            <AiFillYoutube className='text-red-500 text-4xl'></AiFillYoutube>
          </div>
        </div>
        {/* <div className='md:p-0 hidden md:block text-gray-500'>
          <p className='text-blue-500  text-xl font-bold py-2 md:py-0'>
            Liver Pool Office
          </p>

          <p className='text-gray-500'>+263 7 72219600</p>
          <p className='text-blue-500  text-xl font-bold'>Portugal Office </p>

          <p className='text-gray-500'>+263 7 72219600</p>
        </div>{" "} */}
        {/* <div>
          <p className='text-white text-xl font-bold'>Head Office (LONDON)</p>
        
          <p>+44 (0)203 693 3150</p>
        </div> */}
        <div className='text-gray-500 text'>
          <p className='text-blue-500 text-2xl font-bold'>What We Do</p>

          <p className='list-style-none text-lg'>Quantitative Research</p>
         <p className='list-style-none text-lg'>Qualitative Research</p>
         <p className='list-style-none text-lg'>Market Research</p>

         <p className='list-style-none text-lg'>Brand Research</p>
        </div>
      </div>

      <p className='text-center text-base md:text-xs bg-gray-600 p-4 text-white'>
        Research Expert Insights -leading market research company In Zim |
        copyright 2022 XRI | All Rights Reserved | Website by{" "}
        <a href='https://www.trendonline.co.zw'>Trendonline.</a>
      </p>
    </div>
  );
}

export default Footer;
