import React from 'react';

const Input = ({
  labelName,
  type = 'text',
  register,
  fieldName,
  placeholder,
  isRequired = true,
  minValue = 2,
  minValueMessage,
  errorMessage,
  patternValue,
  id = fieldName,
  patternValueMessage,
  classes,
}) => {
  return (
    <div className={`${classes} flex flex-col h-36 lg:h-28 2xl:h-36`}>
      <label
        htmlFor={fieldName}
        className='font-bold xs:text-md lg:text-base 2xl:text-2xl'
      >
        {labelName}
      </label>
      <input
        className='w-92 h-12 bg-gray border-[0.8px] focus:outline-gray-2 border-black mt-4 pl-[3%] xs:max-w-full md:max-w-full lg:max-h-10 xl:max-w-sm  2xl:max-w-lg 2xl:max-h-12'
        type={type}
        id={id}
        placeholder={placeholder}
        {...register(fieldName, {
          required: {
            value: isRequired,
            message: 'ამ ველის შევსება სავალდებულოა',
          },
          minLength: {
            value: minValue,
            message: minValueMessage,
          },
          pattern: {
            value: patternValue,
            message: patternValueMessage,
          },
        })}
      />
      <p className='max-w-sm pl-[3%] pt-1 text-error xs:text-sm lg:text-xs 2xl:text-base'>
        {errorMessage}
      </p>
    </div>
  );
};

export default Input;
