import { TourCardProps } from "../TourCard/types";
import { TypeCardProps } from "../../pages/Home/components/TypeCard/types";
import { TestimonialProps } from "../../pages/Home/components/Testimonials/types";

export type SliderProps = {
  items: TourCardProps[] | TypeCardProps[] | TestimonialProps[];
  renderItem: React.FC<TourCardProps> | React.FC<TypeCardProps> | React.FC<TestimonialProps>;
  perPage: number;
};