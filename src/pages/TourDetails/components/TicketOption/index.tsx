import TicketButton from "../TicketButton";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { TicketOptionProps } from "./types";

const TicketOption = ({ description, value, handleDecrement, handleIncrement }: TicketOptionProps) => {
  return <div className="flex items-center justify-between">
    <label className="text-bodyColor font-normal font-body text-subtitle">
      {description}
    </label>
    <div className="flex gap-2">
      <TicketButton Icon={FaMinus} handleClick={handleDecrement}/>
      <label className="flex items-center justify-center border rounded-lg w-10 h-10 text-bodyColor font-bold text-subtitle">
        {value}
      </label>
      <TicketButton Icon={FaPlus} handleClick={handleIncrement}/>
    </div>
  </div>
};

export default TicketOption;