import Titles from "../../../components/Titles";
import TourCard from "../../../components/TourCard";
import Slider from "../../../components/Slider";
import { TourReturned } from "../../../interfaces/Tour";

type ToursSectionProps = {
  toursData: TourReturned[];
};

const ToursSection = ({toursData}: ToursSectionProps) => {
  console.log(toursData);
  return <section className="flex flex-col w-full jus gap-10 pt-20">
    <Titles colorTitle="black" size="medium" subtitle="Tours" title="Most Popular Tours"/>
    <Slider items={toursData} perPage={4} renderItem={TourCard}/> 
  </section>
};

export default ToursSection;;