import React from 'react';
import logo_wordmark from 'assets/images/logo_wordmark.png';

const Header = (props) => {
  return (
    <div>
      <header className='flex justify-between border-b-[1.8px] border-black ml-[8%] mr-[8%] xs:pt-[8%]  sm:ml-[15%] sm:mr-[15%] md:pt-[2.5%] 2xl:ml-[10%] 2xl:mr-[10%] 2xl:pt-[5%]'>
        <img src={logo_wordmark} alt='redberry-logo' className='mb-4' />
        <div className='font-anonymous xs:text-2xl 2xl:text-4xl'>
          <p>{props.index}/4</p>
        </div>
      </header>
    </div>
  );
};

export default Header;
