import React from 'react'
import { SubmitButtonProps } from './types';

const SubmitButton = ({ onClick, text }: SubmitButtonProps) => {
  return <button 
      type='button'
      className='bg-brand_2 text-white font-semibold rounded-lg p-2 hover:bg-red-500 border'
      onClick={onClick}
    >
    {text}
  </button>
} 

export default SubmitButton;