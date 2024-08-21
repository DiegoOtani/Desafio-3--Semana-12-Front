import React from 'react'
import { InputFieldType } from './types';

const InputField = ({ onChange, inputName, Icon, placeholder, value, type }: InputFieldType) => {
  return <div className='w-full'>
      <p className='text-secondary font-italic font-semibold italic'>{inputName}</p>
      <div className='flex justify-start items-center border font-normal rounded-lg p-2 text-secondary-40 bg-white'>
        <Icon />
        <input 
          onChange={(e) => onChange(e.target.value)}
          className='px-1 focus:outline-none w-full'
          type={type} 
          placeholder={placeholder}
          value={value}
        />
      </div>
    </div>
}

export default InputField;