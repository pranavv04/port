import React, { isValidElement, useState } from 'react';
import { CiMail } from "react-icons/ci";
import {FaLinkedin} from 'react-icons/fa'
import { IoDocumentTextOutline } from "react-icons/io5";
import { SiLeetcode } from "react-icons/si";
import { SiCodingninjas } from "react-icons/si";

const UpperSection = () => {
  const [isFrontend, setIsFrontend] = useState(true);
  setTimeout(()=>{
  setIsFrontend(!isFrontend)
  },2000)

  return (
    <div className='flex justify-center'>
      <div className='justify-center text-center  shadow-sm shadow-gray-700 m-20 px-20 py-2 rounded-xl transition duration-400 hover:scale-105 ease-in-out bg-black'>
       
       <div className='flex flex-col'>
        <h1 className='text-white font-bold text-[50px] m-2'>Pranav Dhangar</h1>
        <p className='text-white text-sm mb-3 text-wrap w-[500px]'>Mern stack developer || Fresher also have good knowledge about Data structures and algorithms and some CS fundamentals. </p>
    
        <div className='flex'>
          <p className='text-white text-sm font-bold m-2'>
            {isFrontend ? "Frontend Developer" : "Backend Developer"}
          </p>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=realpranav19@gmail.com" target="_blank" rel="noopener noreferrer">
            <CiMail className="text-red-500 text-2xl m-2 " />
          </a>
          <a href="https://www.linkedin.com/in/pranav-dhangar-26b67a220" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-white text-2xl m-2" />
         
          </a>
          <a href="/Pranav_resume_sept.pdf" target="_blank" rel="noopener noreferrer">
          <IoDocumentTextOutline  className='text-blue-500 text-2xl m-2 '/>
          </a>
          <a href="https://leetcode.com/u/Pranavv19/" target="_blank" rel="noopener noreferrer">
          <SiLeetcode 
          className='text-yellow-500 text-2xl m-2 '/>
          </a>
          <a href="https://www.naukri.com/code360/profile/pranav19" target="_blank" rel="noopener noreferrer">
          <SiCodingninjas   className='text-red-500 text-2xl m-2 '/>
          </a>
        </div>
        </div>
      </div>
    </div>
  );
};

export default UpperSection;
