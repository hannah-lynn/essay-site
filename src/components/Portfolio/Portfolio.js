import React from 'react';
import code from './code.png';
import { HashLink as Link } from 'react-router-hash-link';

const Portfolio = () => {
  return (
    <div
      className='lg:justify-center lg:flex py-20 mt-10 md:w-full md:grid md:h-full md:place-items-center bg-pattern'
      id='portfolio'
    >
      {/* card one */}
      <div className='m-2 font-sans leading-normal transform hover:scale-105 '>
        <div className='max-w-lg shadow-2xl rounded overflow-hidden m-4 sm:flex bg-blue-100'>
          <div className='h-48 sm:h-auto sm:w-48 md:h-auto md:w-64 flex-none bg-cover bg-center rounded rounded-t sm:rounded sm:rounded-l text-center overflow-hidden'>
            <img src={code} alt='Pic of code' />
          </div>

          <div className='px-6 py-4 '>
            <h2 className='mb-2 font-black'>System Logs</h2>
            <p className='mb-4 text-grey-dark text-sm'>
              First portfolio piece to ensure user actions are logged in the
              database and showing on the system logs page.
            </p>
            <Link to='/system-logs'>
              <button className='py-3 px-6 text-black font-bold rounded-full mt-1 mb-2 bg-green-200 hover:bg-green-500'>
                Take a look!
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* card two */}
      <div className='m-2 font-sans leading-normal transform hover:scale-105'>
        <div className='max-w-lg shadow-2xl rounded overflow-hidden m-4 sm:flex bg-blue-100'>
          <div className='h-48 sm:h-auto sm:w-48 md:w-64 flex-none bg-cover bg-center rounded rounded-t sm:rounded sm:rounded-l text-center overflow-hidden'>
            <img src={code} alt='Pic of code' />
          </div>

          <div className='px-6 py-4'>
            <h2 className='mb-2 font-black'>Popup Preview</h2>
            <p className='mb-4 text-grey-dark text-sm'>
              A preview feature that opens a popup and renders the users'
              created web page as it should look live.
            </p>

            <Link to='/popup-preview'>
              <button className='py-3 px-6 text-black font-bold rounded-full mt-1 mb-2 bg-green-200 hover:bg-green-500'>
                Take a look!
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
