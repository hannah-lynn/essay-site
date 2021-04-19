import React from 'react';
import { Link } from 'react-router-dom';
import './criteria.css';

const Criteria = () => {
  return (
    <div className='flex flex-col ml-9 mr-9 py-20 font-mono mb-10 lg:mx-40'>
      <h2 className='main-title flex flex-col justify-center items-center text-lg my-20'>
        Criteria
      </h2>
      <div className='md:px-8 mb-20'>
        <h3 className='title mb-8 font-semibold'>Supporting Evidence</h3>
        <p className='w-6/6 md:ml-10 md:mr-10 lg:mt-8 md:mt-0'>
          Please click on the links to take you to the essay with evidence
          supporting that criteria.
        </p>
      </div>
      <ul>
        <li>
          <Link className='p-4 hover:text-green-500' to='/system-logs'>
            3.1
          </Link>
        </li>
        <li>
          <Link className='p-4 hover:text-green-500' to='/system-logs'>
            3.3
          </Link>
        </li>
        <li>
          <Link className='p-4 hover:text-green-500' to='/system-logs'>
            5.1
          </Link>
        </li>
        <li>
          <Link className='p-4 hover:text-green-500' to='/system-logs'>
            7.2
          </Link>
        </li>
        <li>
          <Link className='p-4 hover:text-green-500' to='/system-logs'>
            9.2
          </Link>
        </li>
        <li>
          <Link className='p-4 hover:text-green-500' to='/system-logs'>
            9.3
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Criteria;
