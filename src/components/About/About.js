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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
          deleniti dolore cumque similique. Enim eos eligendi laudantium eum
          voluptate? Natus, excepturi? Corporis eveniet cumque eaque labore
          eligendi quisquam at nobis? Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Laborum, voluptas. Quos alias fugit illum
          repellendus velit soluta odio, placeat cumque sit at beatae animi sint
          quae blanditiis minima natus laudantium.
        </p>
      </div>
    </div>
  );
};

export default About;
