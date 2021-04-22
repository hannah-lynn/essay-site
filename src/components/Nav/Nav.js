import React, { useEffect, useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './nav.css';

const Nav = ({ onRouteChange }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);
  useEffect(() => {
    const ac = new AbortController();
    window.addEventListener(
      'resize',
      () => {
        const ismobile = window.innerWidth < 600;
        if (ismobile !== isMobile) setIsMobile(ismobile);
      },
      false
    );
    return () => ac.abort();
  }, [isMobile]);

  return (
    <nav
      className='flex justify-between items-center h-16 text-black shadow-sm font-mono fixed w-full z-20 bg-pattern'
      role='navigation'
    >
      <div className={`${isMobile ? '' : 'hidden'} flex pr-8`}>
        <Link
          className='p-4 hover:text-green-500 flex-row'
          to='/portfolio/#home'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-10 w-10 text-gray-600'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='1.5'
              d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
            />
          </svg>
        </Link>
        <Link className='p-4 hover:text-green-500 flex-row' to='/#about'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-10 w-10 text-gray-600'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='1.5'
              d='M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2'
            />
          </svg>
        </Link>
        <Link className='p-4 hover:text-green-500 flex-row' to='/#portfolio'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-10 w-10 text-gray-600'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='1.5'
              d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
            />
          </svg>
        </Link>
        <Link className='p-4 hover:text-green-500 flex-row' to='/criteria'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-10 w-10 text-gray-600'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path d='M12 14l9-5-9-5-9 5 9 5z' />
            <path d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z' />
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='1.5'
              d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
            />
          </svg>
        </Link>
      </div>
      <div className={`${isMobile ? 'hidden' : ''} pr-8`}>
        <Link className='p-4 hover:text-green-500' to='/portfolio/#home'>
          Home
        </Link>
        <Link className='p-4 hover:text-green-500' to='/portfolio/#about'>
          About
        </Link>
        <Link className='p-4 hover:text-green-500' to='/portfolio/#portfolio'>
          Portfolio
        </Link>
        <Link className='p-4 hover:text-green-500' to='/criteria'>
          Criteria
        </Link>
      </div>
      <div onClick={() => onRouteChange('signin')} className='pr-4'>
        <Link to='/portfolio' className='hover:text-green-500' id='signOutLg'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-10 w-10 text-gray-600'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='1.5'
              d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
            />
          </svg>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
