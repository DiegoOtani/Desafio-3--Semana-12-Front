import SubmitButton from "../../../../components/SubmitButton";
import TicketSection from "../TicketSection";
import { AsidePurchasePros } from "./types";
import { useEffect, useState } from "react";

const AsidePurchase = ({ min_price }: AsidePurchasePros) => {
  const days = ['1 day', '2 days', '3 days', '4 days', '5 days', '6 days', '7 days'];

  const [totalPrice, setTotalPrice] = useState<number>(Number(min_price));
  const [adults, setAdults] = useState<number>(0);
  const [kids, setKids] = useState<number>(0);
  const [childrens, setChildrens] = useState<number>(0);
  const [totalPeoples, setTotalPeoples] = useState<number>(0);
  
  useEffect(() => {
    setTotalPeoples(adults + kids + childrens)
  }, [adults, kids, childrens])

  useEffect(() => {
    setTotalPrice(totalPeoples * Number(min_price));
  }, [totalPeoples, min_price]);

  const handleIncrement = (type: string) => {
    if (type === 'adults') setAdults(prev => prev + 1);
    if (type === 'kids') setKids(prev => prev + 1);
    if (type === 'childrens') setChildrens(prev => prev + 1);
  };

  const handleDecrement = (type: string) => {
    if (type === 'adults' && adults > 0) setAdults(prev => prev - 1);
    if (type === 'kids' && kids > 0) setKids(prev => prev - 1);
    if (type === 'childrens' && childrens > 0) setChildrens(prev => prev - 1);
  };

  return (
    <aside className="w-full bg-surface flex flex-col gap-6 p-10 max-w-[400px]">
      <h3 className="border-b text-h5 font-extrabold font-body">
        ${min_price}
        <span className="text-subtitle text-secondary-80 font-semibold pl-2">/per person</span>
      </h3>
      <div className="flex flex-col font-bold font-body text-subtitle">
        <label>Date</label>
        <input type="date" className="bg-white text-secondary-40 font-normal focus:outline-none p-4 rounded-xl"/>
      </div>
      <div className="flex flex-col font-bold font-body text-subtitle">
        <label>Time</label>
        <select
          className="w-full bg-white text-secondary-40 font-normal focus:outline-none p-4 rounded-xl"
          defaultValue=""
        >
          <option value="" disabled hidden>
            Select
          </option>
          {days.map((day, index) => (
            <option key={index} value={day.split(' ')[0]}>
              {day}
            </option>
          ))}
        </select>
      </div>
      <TicketSection adults={adults} children={childrens} kids={kids} onDecrement={handleDecrement} onIncrement={handleIncrement}/>
      <div className="flex justify-between items-center text-bodyColor font-body border-t pt-4">
        <span>Total</span>
        <span className="font-extrabold text-brand_2 text-h5">${totalPrice}</span>
      </div>
      <SubmitButton text="Book now" onClick={() => console.log('submit')} size="large"/>
    </aside>
  );
};

export default AsidePurchase;
