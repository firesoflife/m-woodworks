import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <header>
      <div>
        <nav>
          <NavLink to='/'>M Woodworks</NavLink>
          <NavLink to='/projects'>Gallery</NavLink>
          <NavLink to='/about'>About Us</NavLink>
          <NavLink>Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}
