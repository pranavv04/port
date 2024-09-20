import React from 'react'
import { FaReact , FaNodeJs , FaHtml5 ,FaCss3  } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandCpp } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoFirebase } from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { DiMysql } from "react-icons/di";
import { FaPython } from "react-icons/fa";
const TechStack = () => {
  return (
    <div className='flex flex-col text-center justify-center mt-5 '>
      <h2 className='text-white text-3xl font-extrabold'>Tech Stack</h2>
      <div className='flex justify-center m-10'>
      <div className='text-white grid-cols-4 grid text-[50px] gap-10 cursor-pointer'>
      <FaHtml5 className='transition ease-in-out duration-200 hover:scale-125 hover:text-red-500 '/>
      <FaCss3 className='transition ease-in-out duration-200 hover:scale-125 hover:text-blue-500 '/>
      <IoLogoJavascript className='transition ease-in-out duration-200 hover:scale-125 hover:text-yellow-500 ' />
      <IoLogoFirebase  className='transition ease-in-out duration-200 hover:scale-125 hover:text-orange-500 '/>
      <FaReact  className='transition ease-in-out duration-200 hover:scale-125 hover:text-blue-400 '/>
      <RiNextjsFill  className='transition ease-in-out duration-200 hover:scale-125 hover:text-white '/>
      <FaNodeJs  className='transition ease-in-out duration-200 hover:scale-125 hover:text-green-500 '/>
      <DiMongodb className='transition ease-in-out duration-200 hover:scale-125 hover:text-green-300 '/>
      <RiTailwindCssFill className='transition ease-in-out duration-200 hover:scale-125 hover:text-blue-300 '/>
      <TbBrandCpp  className='transition ease-in-out duration-200 hover:scale-125 hover:text-blue-500 '/>
      <FaGitAlt  className='transition ease-in-out duration-200 hover:scale-125 hover:text-red-500 '/>
      <FaGithub  className='transition ease-in-out duration-200 hover:scale-125 hover:text-gray-500 '/>
      <SiPostman  className='transition ease-in-out duration-200 hover:scale-125 hover:text-orange-500 '/>
      <FaPython className='transition ease-in-out duration-200 hover:scale-125 hover:text-yellow-500 ' />
      <DiMysql className='transition ease-in-out duration-200 hover:scale-125 hover:text-blue-500 '/>
      </div>
      </div>
     
    </div>
  )
}

export default TechStack
