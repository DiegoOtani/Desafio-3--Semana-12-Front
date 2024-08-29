import { TourDescriptionProps } from "./types";

const TourDescription = ({ title, info, color = 'black' }: TourDescriptionProps) => {
  return <div className="flex flex-col text-h6 font-body">
    <h4 className="text-bodyColor">{title}</h4>
    <p className={`
      font-extrabold 
      ${color === 'red' ? 'text-brand_2' : 'text-secondary'}
    `}>
      {info}
    </p>
  </div>
};

export default TourDescription;