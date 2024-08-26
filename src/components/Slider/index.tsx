// @ts-expect-error @splidejs/react-splide
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import '../../styles/slider.css';
import { SliderProps } from './types';


const Slider = ({ items, renderItem: ItemComponent, perPage }: SliderProps) => {
  return <>
    <Splide 
      className="pb-6"
      options={{
        arrows: false,
        pagination: true, 
        perPage
      }} 
      aria-label="Tour Slides">
        {items.map((item, index) =>  (
          <SplideSlide key={index}> 
            <ItemComponent {...item}/>
          </SplideSlide>
        ))}
    </Splide>
  </>
};

export default Slider;