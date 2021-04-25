import React from 'react';
import hero from '../images/hero-bg.jpeg';
import BigLogo from '../images/logos/main-logo-white.svg';

export default function Home() {
  return (
    <main className='absolute top-0 left-0 h-full w-full flex items-center justify-center'>
      <div className='overlay absolute bg-black opacity-60  h-full w-full z-10'></div>
      <img
        src={hero}
        alt='wood slat ceiling in white'
        className='absolute object-cover w-full h-full 
        bg-blend-darken'
      />

      <section className='relative flex flex-col mb-20 justify-center items-center px-8 z-20'>
        <h1 className='text-white py-5 text-2xl md:text-5xl'>
          Bringing Beautiful Projects to Life
        </h1>
        <img src={BigLogo} alt='m-woodworks big logo' className='w-2/4 pb-4' />
        <button className='bg-green hover:bg-white hover:text-green text-white font-bold py-2 px-4 rounded transition duration-400 ease-in-out '>
          See Our Work
        </button>
      </section>
    </main>
  );
}
