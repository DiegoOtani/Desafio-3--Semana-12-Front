import { TitlesProps } from './types';

const Titles = ({ title, subtitle, colorTitle, size }: TitlesProps) => {
  return (
    <div className='text-center'>
      <h2 className={`text-brand_2 font-bold font-italic italic
          ${size === 'large'
            ? 'text-h4'
            : 'text-h5'
          }
        `}>{subtitle}</h2>
      <h1 className={`
        ${colorTitle === 'black'
          ? 'text-black' 
          : 'text-white'} 
          ${size === 'large'
            ? 'text-large'
            : 'text-h4'
          }
          font-bold text-h4 font-title
        `}>{title}</h1>
    </div>
  )
}

export default Titles;