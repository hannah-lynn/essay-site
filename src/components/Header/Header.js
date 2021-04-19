import React, { useEffect } from 'react';
import './Header.css';
import { HashLink as Link } from 'react-router-hash-link';

function Header({ onRouteChange }) {
  useEffect(() => {
    const delayBtns = window.setTimeout(() => {
      const element1 = document.getElementById('btn-1');
      const element2 = document.getElementById('btn-2');
      element1.classList.remove('hidden');
      element2.classList.remove('hidden');
    }, 6000);
    return () => {
      window.clearInterval(delayBtns);
    };
  }, []);

  return (
    <div className='h-screen background' id='home'>
      <div className='modal absolute top-2/4 left-1/2 transform -translate-x-2/4  -translate-y-2/4 sm:max-w-md bg-white opacity-70 rounded-3xl shadow-lg font-mono inline-flex flex-col items-center md:px-12 py-6 sm: px-4 border-black border-4'>
        <p className='message'>Hello</p>
        <p className='message'>
          <span className='text_1'>Welcome to my portfolio</span>
          <span className='text_2'>Do you want to see more?</span>
        </p>
        <div className='options'>
          <Link
            to='/#about'
            id='btn-1'
            className='hidden md:mr-10 sm:mr-2 btn hover:bg-green-400'
          >
            Yes
          </Link>
          <button
            id='btn-2'
            onClick={() => onRouteChange('signin')}
            className='hidden btn hover:bg-pink-300'
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
