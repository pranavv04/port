import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { CiMail } from "react-icons/ci";
import { IoDocumentTextOutline } from "react-icons/io5";

const SocialMedia = () => {
  return (
    <div className="flex justify-center mt-10">
      <div className="flex space-x-4 bg-black rounded-[50px] border border-gray-800 mb-10 p-2  shadow-sm shadow-gray-700">
        {/* GitHub Icon */}
        <a
          href="https://github.com/pranavv04"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-150 p-2"
        >
          <FaGithub className="text-4xl text-gray-400 hover:text-white" />
        </a>

        {/* LinkedIn Icon */}
        <a
          href="https://www.linkedin.com/in/pranav-dhangar-26b67a220"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-150 p-2"
        >
          <FaLinkedin className="text-4xl text-blue-400 hover:text-white" />
        </a>

        {/* Twitter Icon */}
        <a
          href="https://x.com/_pranavv04_"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-150 p-2"
        >
          <FaTwitter className="text-4xl text-blue-400 hover:text-white" />
        </a>
        <a
         
         href="https://mail.google.com/mail/?view=cm&fs=1&to=realpranav19@gmail.com" // Replace with your email
         target="_blank"
         rel="noopener noreferrer"
          className="transition-transform transform hover:scale-150 p-2"
        >
          <CiMail 
          className="text-4xl text-red-400 hover:text-white" />
        </a>
        <a
          href="/Pranav_resume_sept.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-150 p-2"
        >
          <IoDocumentTextOutline   className="text-4xl text-blue-400 hover:text-white" />
        </a>

      </div>
    </div>
  );
};

export default SocialMedia;
