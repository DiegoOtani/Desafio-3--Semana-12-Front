import SubmitButton from "../../../../components/SubmitButton";
import TicketSection from "../TicketSection";

const AsidePurchase = () => {
  const days = ['1 day', '2 days', '3 days', '4 days', '5 days', '6 days', '7 days'];

  return (
    <aside className="w-full bg-surface flex flex-col gap-6 p-10 max-w-[400px]">
      <h3 className="border-b text-h5 font-extrabold font-body">
        $104
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
      <TicketSection />
      <div className="flex justify-between items-center text-bodyColor font-body border-t pt-4">
        <span>Total</span>
        <span className="font-extrabold text-brand_2 text-h5">$104</span>
      </div>
      <SubmitButton text="Book noew" onClick={() => console.log('submit')} size="large"/>
    </aside>
  );
};

export default AsidePurchase;
