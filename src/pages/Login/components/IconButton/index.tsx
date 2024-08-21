import React from 'react'
import { IconButtonProps } from './types';

const IconButton = ({ Icon, handleClick }: IconButtonProps) => {
  return <button 
    type='button'
    onClick={handleClick}
    className='
      flex items-center justify-center w-full h-full 
      bg-white border border-black rounded-lg p-2 
      hover:opacity-80 hover:border-brand_2
    '
  >
    <Icon color='#1877F2'/>
  </button>
}

export default IconButton;