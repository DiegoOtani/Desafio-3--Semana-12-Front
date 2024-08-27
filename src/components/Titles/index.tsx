import { TitlesProps } from './types';

const Titles = ({ title, subtitle, colorTitle, size, place = 'center' }: TitlesProps) => {
  return (
    <div className={place === `center`
        ? 'text-center'
        : 'text-start'
      }>
      <h2 className={`text-brand_2 font-normal font-italic
          ${size === 'large'
            ? 'text-h4'
            : 'text-h5'
          }
        `}>{subtitle}</h2>
      <h1 className={` leading-tight
        ${colorTitle === 'black'
          ? 'text-secondary' 
          : 'text-white'} 
          ${size === 'large'
            ? 'text-large'
            : 'text-h2'
          }
          font-bold font-title
        `}>{title}</h1>
    </div>
  )
}

export default Titles;