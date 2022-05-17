import React from 'react';
import thanks from 'assets/images/thanks.png';
import star from 'assets/images/star.png';

const Thanks = () => {
  return (
    <>
      <div className='min-h-screen bg-black flex flex-col items-center justify-center gap-20 '>
        <img
          src={thanks}
          className='relative xs:w-60 2xl:w-80'
          alt='text'
        ></img>
        <img
          src={star}
          className='absolute right-[58%] top-[40%] xs:w-8 2xl:w-10 animate-pulse'
          alt='text'
        ></img>
        <img
          src={star}
          className='absolute right-[40%] top-[55%] xs:w-4 2xl:w-8 animate-pulse'
          alt='text'
        ></img>
      </div>
    </>
  );
};

export default Thanks;
