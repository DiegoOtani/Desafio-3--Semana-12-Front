import { useState } from 'react';
import Stars from '../Stars';
import { FaRegClock } from 'react-icons/fa6';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { TourReturned } from '../../interfaces/Tour';
import { Link } from 'react-router-dom';

const TourCard = ({ tour_id, ulrImg, tour_name, average_review, review_count, duration, price_per_person, city, country_name  }: TourReturned) => {
  const [isHeartFilled, setIsHeartFilled] = useState(false);
  
  const handleHeartClick = () => {
    setIsHeartFilled(prevState => !prevState);
  };

  return (
    <div key={tour_id} className='w-full bg-white flex flex-col items-center justify-center relative px-6 pb-6'>
      <button
        className='absolute bg-white rounded-full p-4 top-4 right-10 hover:text-red-600'
        onClick={handleHeartClick}
      >
        {isHeartFilled ? (
          <FaHeart size={14} color='red' />
        ) : (
          <FaRegHeart size={14} />
        )}
      </button>
      <img src={ulrImg} className='h-60 w-full' alt="Tour" />
      <Link  to={`/tour/${tour_id}`}
        className=' bg-surface w-full p-4 flex flex-col justify-between gap-2 font-bold'
        >
        <p className='text-secondary-40 pt-2 text-h6'>{city}, {country_name}</p>
        <h3 className='font-bold font-title text-secondary text-h5'>{tour_name}</h3>
        <div className='flex items-center justify-between text-gray-500 py-1'>
          <span className='flex gap-1'>
            <Stars value={average_review} />
            <span>{review_count} reviews</span>
          </span>
          <span className='flex items-center gap-1'>
            <FaRegClock />
            {duration} days
          </span>
        </div>
        <p className='flex justify-between text-secondary-80 text-body border-t-2 py-2'>
          Starting from 
          <span className='text-black text-h6 font-italic font-semibold'>${price_per_person}</span>
        </p>
      </Link>
    </div>
  );
};

export default TourCard;
