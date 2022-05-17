import React from 'react';

const GridWrapper = (props) => {
  return (
    <div className='grid xs:grid-cols-1 lg:grid-cols-2 ml-[8%] mr-[8%] sm:ml-[15%] sm:mr-[15%] 2xl:ml-[10%] 2xl:mr-[10%]'>
      {props.children}
    </div>
  );
};

export default GridWrapper;
