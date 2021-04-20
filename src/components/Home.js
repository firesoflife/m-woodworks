import React from 'react';
import image from '../hero-bg.jpeg';

export default function Home() {
  return (
    <main>
      <img
        src={image}
        alt='wood slat ceiling in white'
        className='absolute object-cover w-full h-full'
      />
      <section className='relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8'>
        <h1 className='text-6xl text-blue-400 font-bold main-text leading none lg:leading-snug home-name'>
          Welcome to M Woodworks
        </h1>
      </section>
    </main>
  );
}
