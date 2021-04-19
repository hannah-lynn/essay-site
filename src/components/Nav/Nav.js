import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import Criteria from '../../Pages/Criteria/criteria';
import './nav.css';

const Nav = ({ toggle, onRouteChange, isSignedIn }) => {
  return (
    <nav
      className='flex justify-between items-center h-16 text-black shadow-sm font-mono fixed w-full z-20 bg-pattern'
      role='navigation'
    >
      {/* <div className='px-4 cursor-pointer md:hidden' onClick={toggle}>
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
      </div> */}
      <div className='pr-8'>
        <Link className='p-4 hover:text-green-500' to='/#home'>
          Home
        </Link>
        <Link className='p-4 hover:text-green-500' to='/#about'>
          About
        </Link>
        <Link className='p-4 hover:text-green-500' to='/#portfolio'>
          Portfolio
        </Link>
        <Link className='p-4 hover:text-green-500' to='/criteria'>
          Criteria
        </Link>
      </div>
      <div onClick={() => onRouteChange('signin')}>
        <Link to='/' className='pr-8 hover:text-green-500' id='signOutLg'>
          Logout
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
