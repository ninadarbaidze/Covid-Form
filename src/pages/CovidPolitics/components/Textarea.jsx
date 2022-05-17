import React from 'react';

const Textarea = ({
  labelName,
  register,
  fieldName,
  errorMessage,
  id = fieldName,
}) => {
  return (
    <>
      <div className='flex flex-col mb-12'>
        <label
          htmlFor={fieldName}
          className='font-bold xs:text-md lg:text-base 2xl:text-2xl'
        >
          {labelName}
        </label>
        <textarea
          id={fieldName}
          className='w-96 h-32 bg-gray border-[0.8px] focus:outline-gray-2 border-black mt-4 text-sm pl-[3%] pt-[3%] xs:max-w-full md:max-w-full xl:max-w-full  2xl:max-w-full'
          {...register(fieldName)}
        />
        <p className='text-base pl-[3%] mt-2 text-error'>{errorMessage}</p>
      </div>
    </>
  );
};

export default Textarea;
