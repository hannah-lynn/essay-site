import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './dropdown.css';

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? 'grid grid-rows text-center fixed w-full pt-5 pl-4 z-10 bg-pink-300'
          : 'hidden'
      }
      onClick={toggle}
    >
      <svg
        className='w-6 h-6'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 20 20'
        fill='currentColor'
      >
        <path
          fillRule='evenodd'
          d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
          clipRule='evenodd'
        />
      </svg>
      <Link
        className='p-4 font-bold text-gray-600 hover:text-black'
        to='/#home'
      >
        Home
      </Link>
      <Link
        className='p-4 font-bold text-gray-600 hover:text-black'
        to='/#about'
      >
        About
      </Link>
      <Link
        className='p-4 font-bold text-gray-600 hover:text-black'
        to='/#essays'
      >
        Essays
      </Link>
      <div className='pt-3 pb-5'>
        <Link className='p-4 font-bold text-gray-600 hover:text-black' to='/'>
          Sign Out
        </Link>
      </div>
    </div>
  );
};

export default Dropdown;
