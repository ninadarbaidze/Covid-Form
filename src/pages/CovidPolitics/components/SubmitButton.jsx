import React from 'react';

const SubmitButton = (props) => {
  return (
    <button
      onClick={props.onClick}
      id='submit-button'
      className='text-lg font-bold text-white bg-green hover:bg-green-d focus:outline-none transition duration-300 rounded-full px-10 py-2.5 mr-2 mb-2'
    >
      დასრულება
    </button>
  );
};

export default SubmitButton;
