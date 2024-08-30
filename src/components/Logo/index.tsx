import { GiCommercialAirplane } from 'react-icons/gi';
import { LogoProps } from './types';
import { Link } from 'react-router-dom';

const Logo = ({ color = 'black', size = 'large' }: LogoProps) => {
  return <Link to='/' className={`flex items-center gap-2 font-title pr-6 
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
  </Link>
}

export default Logo;