import { GiCommercialAirplane } from 'react-icons/gi';
import { LogoProps } from './types';

const Logo = ({ color = 'black', size = 'large' }: LogoProps) => {
  return <a className={`flex items-center gap-2 font-title italic pr-6 
    ${size === 'large' 
      ? 'text-h4 font-extrabold '
      : 'text-h5 font-bold '
    }
    ${color === 'black' 
      ? 'text-black'
      : 'text-white'
    }`}>
    <GiCommercialAirplane size={28} color={color}/>
    Trisog
  </a>
}

export default Logo;