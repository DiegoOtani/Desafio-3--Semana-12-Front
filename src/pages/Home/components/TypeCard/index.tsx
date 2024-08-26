import { TypeCardProps } from "./types";

const TypeCard = ({ Icon, type, tours, minValue }: TypeCardProps) => {
  return <div>
    <Icon />
    <span>{type}</span>
    <span>{tours} Tours+</span>
    <p>From: <span>${minValue}</span></p>
  </div>
}

export default TypeCard;