import { useState } from 'react';
import Stars from '../Stars';
import { TourCardProps } from './types';
import { FaRegClock } from 'react-icons/fa6';
import { FaRegHeart, FaHeart } from 'react-icons/fa';

const TourCard = ({ imgUrl, locale, title, stars, reviews, days, minPrice }: TourCardProps) => {
  const [isHeartFilled, setIsHeartFilled] = useState(false);

  const handleHeartClick = () => {
    setIsHeartFilled(prevState => !prevState);
  };

  return (
    <div className='w-[90%] bg-gray-100 flex flex-col items-center relative'>
      <button
        className='absolute bg-white rounded-full p-4 top-4 right-4 hover:text-red-600'
        onClick={handleHeartClick}
      >
        {isHeartFilled ? (
          <FaHeart size={14} color='red' />
        ) : (
          <FaRegHeart size={14} />
        )}
      </button>
      <img src={imgUrl} className='h-60 w-full' alt="Tour" />
      <a 
        className='w-full p-4 flex flex-col justify-between gap-2 font-bold'
        href='#'
        >
        <p className='text-secondary-40 pt-2 text-h6'>{locale}</p>
        <h3 className='font-bold font-title text-secondary text-h5'>{title}</h3>
        <div className='flex items-center justify-between text-gray-500 py-1'>
          <span className='flex gap-1'>
            <Stars value={stars} />
            <span>{reviews} reviews</span>
          </span>
          <span className='flex items-center gap-1'>
            <FaRegClock />
            {days} days
          </span>
        </div>
        <p className='flex justify-between text-secondary-80 text-body border-t-2 py-2'>
          Starting from 
          <span className='text-black text-h6 font-italic font-semibold'>${minPrice}</span>
        </p>
      </a>
    </div>
  );
};

export default TourCard;
