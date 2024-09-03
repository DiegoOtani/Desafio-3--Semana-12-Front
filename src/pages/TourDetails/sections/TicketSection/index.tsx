import TicketOption from "../../components/TicketOption";
import { TicketSectionProps } from "./types";

const TicketSection = ({ adults, children, kids, onDecrement, onIncrement }: TicketSectionProps) => {
  return <section className="flex flex-col gap-2">
    <label className="font-bold font-body text-subtitle">Ticket</label>
    <TicketOption 
      description="Adults (18+ years)" 
      value={adults}
      handleDecrement={() => onDecrement('adults')}
      handleIncrement={() => onIncrement('adults')}
    />
    <TicketOption 
      description="Kids (12+ years)" 
      value={kids}
      handleDecrement={() => onDecrement('kids')}
      handleIncrement={() => onIncrement('kids')}
    />
    <TicketOption 
      description="Children (3+ years)" 
      value={children}
      handleDecrement={() => onDecrement('childrens')}
      handleIncrement={() => onIncrement('childrens')}
    />
  </section>
};

export default TicketSection;