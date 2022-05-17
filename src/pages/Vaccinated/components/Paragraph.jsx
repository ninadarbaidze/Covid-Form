import React from 'react';

const Paragraph = (props) => {
  return (
    <>
      <p className='ml-[6%] mt-4 mb-8 xs:text-sm lg:text-sm 2xl:text-lg'>
        {props.firstLine} <br />
        {props.secondLine}
        <p className='mt-4'>{props.thirdLine}</p>
        <a href='https://booking.moh.gov.ge/' className='text-link'>
          {props.link}
        </a>
      </p>
    </>
  );
};

export default Paragraph;
