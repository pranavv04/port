import React from 'react';
import projects from '../project.json';

const Project = () => {
  return (
    <div className='flex flex-col justify-center items-center m-10'>
      <h1 className='text-white font-extrabold text-3xl mb-8'>Projects</h1>

      {/* Grid container with 1 column on small screens and 2 columns on medium and above */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        {projects.map((project, index) => (
          <div key={index} className='shadow-sm shadow-gray-700 py-4 px-6 rounded-lg bg-black justify-center flex flex-col items-center text-center'>
            <img
              src={project.image}
              alt={project.title}
              className='w-[400px] h-[300px]  rounded-lg'
            />
            <div className='mt-4'>
              <h2 className='text-white font-bold text-xl'>{project.title}</h2>
              <p className='text-white text-sm'>{project.description}</p>
            </div>
            <div>
              <button className='text-black bg-white font-bold px-4 py-2 rounded-lg m-5'>Github</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
