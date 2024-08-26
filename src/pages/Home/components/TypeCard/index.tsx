import { TypeCardProps } from "./types";

const TypeCard = ({ Icon, type, tours, minValue }: TypeCardProps) => {
  return <a className="w-[80%] border flex flex-col gap-2 p-4 font-body">
    <Icon size={40} color="051036"/>
    <span className="text-secondary text-h6 font-title font-extrabold pt-3">{type}</span>
    <span className=" text-secondary-80 text-h6 font-normal">{tours} Tours+</span>
    <p className="text-secondary-80 text-h6">
      From 
      <span className="text-brand_2 text-h5 font-italic font-bold pl-2">
        ${minValue}
      </span>
    </p>
  </a>
}

export default TypeCard;