import React from 'react';

function Footer() {
  return (
    <footer className='absolute bottom-0 left-0 w-full z-30'>
      <div className='footer-container text-white bg-green text-xl3 w-full h-20 px-20 md:flex justify-between items-center'>
        <div className='left'>
          <h1 className=''>M Woodworks</h1>
        </div>
        <div className='middle'>Something</div>
        <div className='right self-end text-xs align-bottom text-right text-green-light mb-1'>
          Website & Design By Exipio Web Dev
        </div>
      </div>
    </footer>
  );
}

export default Footer;
