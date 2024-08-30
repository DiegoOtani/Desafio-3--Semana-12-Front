export type TicketSectionProps = {
  adults: number;
  kids: number;
  children: number;
  onIncrement: (type: string) => void;
  onDecrement: (type: string) => void;
};