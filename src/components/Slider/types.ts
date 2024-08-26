import { TourCardProps } from "../TourCard/types";
import { TypeCardProps } from "../../pages/Home/components/TypeCard/types";

export type SliderProps = {
items: TourCardProps[] | TypeCardProps[];
renderItem: React.FC<TourCardProps> | React.FC<TypeCardProps>;
perPage: number;
};