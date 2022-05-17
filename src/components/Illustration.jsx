import React from 'react';

const Illustration = (props) => {
  return (
    <>
      <img
        src={props.main}
        alt='illustration'
        className='w-[90%] xs:hidden xs:mt-8 md:mt-12 lg:max-w-7xl md:hidden lg:block  '
      />
    </>
  );
};

export default Illustration;
