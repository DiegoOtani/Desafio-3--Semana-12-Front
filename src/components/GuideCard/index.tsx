import { GuideCardProps } from './types';

const GuideCard = ({ imgUrl, alt, date, type, title }: GuideCardProps) => {
  return <div className='flex max-w-[80%]'>
    <img className='w-50 h-40' src={imgUrl} alt={alt} />
    <div className='flex flex-col justify-center px-4 text-h6'>
      <p className='text-gray-400 font-medium font-body'>
        {date}
        <span className='relative pl-9 before:content-["•"] 
        before:absolute 
        before:left-6
        before:text-gray-400 
        before:font-bold'>
          {type}
        </span>
      </p>
      <h2 className='font-extrabold text-secondary-80 text-h5 font-title pt-2'>{title}</h2>
    </div>
  </div>
}

export default GuideCard;