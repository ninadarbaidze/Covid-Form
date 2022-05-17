import React from 'react';

const ButtonWrapper = (props) => {
  return (
    <div className='flex justify-center gap-24 mt-14 xs:mb-12 sm:mt-14'>
      {props.children}
    </div>
  );
};

export default ButtonWrapper;
