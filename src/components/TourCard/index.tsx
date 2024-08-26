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
    <a 
      href='#'
      className='w-80 bg-gray-100 flex flex-col items-center relative'>
      <button
        className='absolute bg-white rounded-full p-2 top-4 right-4 hover:text-red-600'
        onClick={handleHeartClick}
      >
        {isHeartFilled ? (
          <FaHeart size={12} color='red' />
        ) : (
          <FaRegHeart size={12} />
        )}
      </button>
      <img src={imgUrl} className='h-50' alt="Tour" />
      <div className='w-[95%] px-2 flex flex-col justify-center gap-1'>
        <p className='text-gray-500 pt-2'>{locale}</p>
        <h3 className='font-bold text-h6'>{title}</h3>
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
        <p className='flex justify-between text-gray-500 text-body border-t-2 py-2'>
          Starting from 
          <span className='text-black text-h6 font-italic italic font-semibold'>${minPrice}</span>
        </p>
      </div>
    </a>
  );
};

export default TourCard;
