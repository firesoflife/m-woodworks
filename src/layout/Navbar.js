import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import logo from '../images/logos/m-logo-green.svg';

export default function Navbar() {
  return (
    <header className='bg-white relative z-20'>
      <div className='px-10 mx-auto flex justify-between bg-green'>
        <div className='logo-bg rounded-full flex justify-center p-5 m-5 shadow-lg'>
          <img src={logo} alt='m-woodworks logo' className='w-7 ' />
        </div>
        {/* Mobile */}

        <nav className='inline container sm:flex block items-center'>
          <div className='nav-links flex  justify-center'>
            <NavLink
              to='/'
              exact
              className='iinline-flex text-xl items-center py-1  px-2 rounded text-green-light hover:text-gray-light'
              activeClassName='text-green-light bg-gray shadow-lg'
            >
              Home
            </NavLink>
            <NavLink
              to='/project'
              className='inline-flex text-xl  items-center py-1  px-2 rounded text-green-light hover:text-gray-light'
              activeClassName='text-green-light bg-gray shadow-lg'
            >
              Gallery
            </NavLink>
            <NavLink
              to='/about'
              className='inline-flex text-xl items-center py-1 px-2 rounded text-green-light hover:text-gray-light'
              activeClassName='text-green-light bg-gray shadow-lg'
            >
              About Us
            </NavLink>
            <NavLink
              to='/post'
              className='inline-flex text-xl items-center py-1 px-2 rounded text-green-light hover:text-gray-light'
              activeClassName='text-green-light bg-gray shadow-lg'
            >
              Blog
            </NavLink>
            <NavLink
              to='/contact'
              className='inline-flex text-xl items-center py-1 px-2 rounded text-green-light hover:text-gray-light'
              activeClassName='text-green-light bg-gray shadow-lg'
            >
              Contact
            </NavLink>
          </div>
        </nav>
        <div className='inline-flex py-3 px-3 my-6'>
          <SocialIcon
            url='https://www.instagram.com/m.woodworks/'
            className='mr-4'
            target='_blank'
            bgColor='#fff'
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url='https://www.facebook.com/mwoodworks.mb/'
            className='mr-4'
            target='_blank'
            bgColor='#fff'
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}
