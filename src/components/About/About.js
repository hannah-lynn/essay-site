import React from 'react';
import nz from './nz.png';

const About = () => {
  return (
    <div className='flex flex-col ml-9 mr-9 py-20 font-mono' id='about'>
      <h2 className='flex flex-col justify-center items-center font-bold text-lg mb-20'>
        About me
      </h2>
      <div className='md:px-8'>
        <img
          src={nz}
          alt='Pic of me in NZ'
          className='md:rounded-full md:w-1/6 sm:rounded-lg sm:w-2/6 float-left mr-8 mb-5 md:ml-20'
        />
        <p className='w-6/6 md:ml-20 md:mr-20 lg:mt-8 md:mt-0'>
          {/* After teaching myself some of the basics of HTML5, CSS3 and JavaScript
          over a few months I started the Software Development Technician
          Apprenticeship with Pecometer in October 2020. Here I work frontend
          and backend, using mySQL, Typescript, and the backend is an in house
          framework based on Angular. This portfolio site is built using React
          with Tailwind CSS. */}
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus
          consequatur porro aperiam, nobis doloremque eaque reprehenderit
          asperiores harum fuga corporis rem alias. Nemo nulla asperiores,
          tempora voluptatum corporis adipisci voluptates! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Vel voluptates aut ullam,
          dignissimos officia numquam. Ratione dolore doloremque porro eum et
          sequi repellendus, sed exercitationem corrupti molestias facilis
          repudiandae at!
        </p>
      </div>
    </div>
  );
};

export default About;
