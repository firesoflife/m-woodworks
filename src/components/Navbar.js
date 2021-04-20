import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

export default function Navbar() {
  return (
    <header className='bg-blue-400'>
      <div className='container mx-auto flex justify-between'>
        <nav className='flex'>
          <NavLink
            to='/'
            exact
            activeClassName='text-white'
            className='inline-flex items-center py-6 px-3 mr-4 text-blue-800 hover:text-blue-800 text-4xl font-bold font-main tracking-widest'
          >
            M Woodworks
          </NavLink>
          <NavLink
            to='/project'
            className='inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-blue-800'
            activeClassName='text-blue-800 bg-white'
          >
            Gallery
          </NavLink>
          <NavLink
            to='/about'
            className='inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-blue-800'
            activeClassName='text-blue-800 bg-white'
          >
            About Us
          </NavLink>
          <NavLink
            to='/post'
            className='inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-blue-800'
            activeClassName='text-blue-800 bg-white'
          >
            Blog
          </NavLink>
          <NavLink
            to='/contact'
            className='inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-blue-800'
            activeClassName='text-blue-800 bg-white'
          >
            Contact
          </NavLink>
        </nav>
        <div className='inline-flex py-3 px-3 my-6'>
          <SocialIcon
            url='https://www.instagram.com/m.woodworks/'
            className='mr-4'
            target='_blank'
            fgColor='#fff'
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url='https://www.facebook.com/mwoodworks.mb/'
            className='mr-4'
            target='_blank'
            fgColor='#fff'
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}
