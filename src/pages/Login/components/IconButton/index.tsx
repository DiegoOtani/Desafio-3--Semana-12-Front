import React from 'react'
import { IconButtonProps } from './types';

const IconButton = ({ Icon, handleClick }: IconButtonProps) => {
  return <button 
    type='button'
    onClick={handleClick}
    className='flex items-center justify-center w-full h-full bg-white border p-2 hover:opacity-80 hover:border-black'
  >
    <Icon color='#1877F2'/>
  </button>
}

export default IconButton;