import TicketOption from "../../components/TicketOption";

const TicketSection = () => {
  return <section className="flex flex-col gap-2">
    <label className="font-bold font-body text-h6">Ticket</label>
    <TicketOption description="Adults (18+ years)" value={0}/>
    <TicketOption description="Kids (12+ years)" value={0}/>
    <TicketOption description="Children (3+ years)" value={0}/>
  </section>
};  

export default TicketSection;