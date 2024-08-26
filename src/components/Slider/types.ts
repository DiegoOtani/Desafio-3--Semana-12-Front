import { TourCardProps } from "../TourCard/types";

export type SliderProps = {
items: TourCardProps[];
renderItem: React.FC<TourCardProps>;
perPage: number;
};