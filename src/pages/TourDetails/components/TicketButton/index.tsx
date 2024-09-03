import { TicketButttonProps } from "./types";

const TicketButton = ({ Icon, handleClick }: TicketButttonProps) => {
  return <button className="flex items-center justify-center border rounded-lg w-10 h-10"
  type="button" 
  onClick={handleClick}
  >
    <Icon color="676d85" size={20}/>
  </button>
};

export default TicketButton;