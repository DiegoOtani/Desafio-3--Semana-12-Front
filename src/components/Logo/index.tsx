import React from 'react'
import { GiCommercialAirplane } from 'react-icons/gi';
import { LogoProps } from './types';

const Logo = ({ color = 'black', size = 24 }: LogoProps) => {
  return <a className={`flex items-center font-title italic font-extrabold text-h4 pr-6 
    ${color === 'black' 
      ? 'text-black'
      : 'text-white'
    }`}>
    <GiCommercialAirplane size={size} color={color}/>
    Trisog
  </a>
}

export default Logo;