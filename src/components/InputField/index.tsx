import React from 'react'
import { InputFieldType } from './types';

const InputField = ({ onChange, inputName, Icon, placeholder }: InputFieldType) => {
  return <div className='w-full'>
      <p className='text-secondary font-price font-semibold italic'>{inputName}</p>
      <div className='flex justify-start items-center border font-normal rounded px-2 py-1 text-secondary-40'>
        <Icon />
        <input 
          onChange={onChange}
          className='px-1 focus:outline-none w-full'
          type="text" 
          placeholder={placeholder}
        />
      </div>
    </div>
}

export default InputField;