import React from 'react'
import { InputFieldType } from './types';

const InputField = ({ inputName, Icon, placeholder }: InputFieldType) => {
  return <div className='w-full'>
      <p className='text-secondary font-semibold'>{inputName}</p>
      <div className='flex justify-start items-center border font-semibold rounded px-2 py-1'>
        <Icon />
        <input 
          className='px-1'
          type="text" 
          placeholder={placeholder}
        />
      </div>
    </div>
}

export default InputField;