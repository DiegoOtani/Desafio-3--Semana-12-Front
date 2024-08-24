// @ts-expect-error @splidejs/react-splide
import { Splide, SplideSlide } from '@splidejs/react-splide';
import TourCard from '../TourCard';
import '@splidejs/splide/css';
import '../../styles/slider.css';
import { Tour } from '../../interfaces/Tour';

interface TourSliderProps {
  tours: Tour[];
}

const TourSlider: React.FC<TourSliderProps> = ({ tours }) => {
  return <>
    <Splide 
      className="pb-6"
      options={{
        arrows: false,
        pagination: true, 
        perPage: 4
      }} 
      aria-label="Tour Slides">
        {tours.map((tour, index) =>  (
          <SplideSlide key={index}> 
            <TourCard {...tour}/>
          </SplideSlide>
        ))}
    </Splide>
  </>
};

export default TourSlider;