import React from 'react'
import { GiCommercialAirplane } from 'react-icons/gi';
import { LogoProps } from './types';

const Logo = ({ color = 'black', size = 'large' }: LogoProps) => {
  return <a className={`flex items-center gap-2 font-title italic font-extrabold pr-6 
    ${size === 'large' 
      ? 'text-h4'
      : 'text-h5'
    }
    ${color === 'black' 
      ? 'text-black'
      : 'text-white'
    }`}>
    <GiCommercialAirplane size={24} color={color}/>
    Trisog
  </a>
}

export default Logo;