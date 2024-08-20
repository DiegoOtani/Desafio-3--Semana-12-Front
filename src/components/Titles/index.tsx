import React from 'react'
import { TitlesProps } from './types';

const Titles = ({ title, subtitle, colorTitle }: TitlesProps) => {
  return (
    <div className='text-center'>
      <h2 className='text-brand_2 text-h6 font-semibold font-price italic'>{subtitle}</h2>
      <h1 className={`
        ${colorTitle === 'black'
          ? 'text-black' 
          : 'text-white'} 
          font-bold text-h4
        `}>{title}</h1>
    </div>
  )
}

export default Titles;