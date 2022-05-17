import React from 'react';

const InputRadio = ({
  register,
  question,
  isRequired = true,
  requiredMessage,
  options,
}) => {
  return (
    <>
      <p className='font-bold mb-3 xs:text-md lg:text-base 2xl:text-2xl'>
        {question}
      </p>
      {options.map((value) => (
        <div
          key={value.id}
          className='flex items-center gap-3 mb-1 xs:text-sm lg:text-sm 2xl:text-lg'
        >
          <input
            {...register(value.fieldName, {
              required: {
                value: isRequired,
                message: 'ამ ველის შევსება სავალდებულოა',
              },
            })}
            type='radio'
            value={value.value}
            id={value.id}
            className='form-check-input appearance-none rounded-full border checked:bg-black transition duration-200 my-1 cursor-pointer xs:h-3 xs:w-3 sm:h-4 sm:w-4'
          />
          <label htmlFor={value.id}>{value.labelName}</label>
        </div>
      ))}
      <p className='pl-[3%] mt-2 mb-8 text-error xs:text-sm lg:text-xs 2xl:text-base'>
        {requiredMessage}
      </p>
    </>
  );
};

export default InputRadio;
