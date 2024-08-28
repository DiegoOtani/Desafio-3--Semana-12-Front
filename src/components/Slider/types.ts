import { TourReturned } from "../../interfaces/Tour";
import { TypeCardProps } from "../../pages/Home/components/TypeCard/types";
import { TestimonialProps } from "../../pages/Home/components/Testimonials/types";

export type SliderProps = {
  items: TourReturned[] | TypeCardProps[] | TestimonialProps[];
  renderItem: React.FC<TourReturned> | React.FC<TypeCardProps> | React.FC<TestimonialProps>;
  perPage: number;
};