import { FaStar } from "react-icons/fa6";
import TourDescription from "../../components/TourDescription";
import { InfoSectionProps } from "./types";

const InfoSection = ({ min_price, duration, max_people, min_age, types, average, count_review }: InfoSectionProps) => {
  return <section className="w-full flex py-4 border-t gap-2">
    <TourDescription title="From" info={`$${min_price}`} color="red" key={'From'}/>
    <TourDescription title="Duration" info={`${duration} days`} key={'Duration'}/>
    <TourDescription title="Max People" info={max_people} key={'Max People'}/>
    <TourDescription title="Min Age" info={`${min_age}+`} key={'Min Age'}/>
    <TourDescription title="Tour Type" info={types} key={'Tour Type'}/>
    <div className="w-full flex flex-col text-h6 font-body">
      <h4 className="text-bodyColor">Reviews</h4>
      <div className={`flex items-center gap-2 font-bold`}>
        <FaStar color="fc5056" size={16}/>
        <p className="text-subtitle">
          {average}
          <span className="text-bodyColor font-normal text-subtitle pl-2">({count_review} reviews)</span>
        </p>
      </div>
    </div>
  </section>
};

export default InfoSection;