import InputField from "../InputField";
import SubmitButton from "../SubmitButton";
import { TbLocation } from "react-icons/tb";
import { FiUsers } from "react-icons/fi";
import { FaRegFlag } from "react-icons/fa";
import { SearchBarProps } from "./types";

const SearchBar = ({ options }: SearchBarProps) => {
  return <div className="flex justify-between items-end gap-4 w-[80%] bg-surface p-10 rounded-3xl z-10 absolute bottom-[-70px] shadow-xl">
    <InputField Icon={TbLocation} onChange={(e) => console.log(e)} placeholder="Where to go?" type="text" inputName="Destination" size="large" value=""/>
    <div className="w-full">
      <label htmlFor="options" className="text-secondary font-italic font-bold text-h6">Type</label>
      <div className="flex items-center bg-white border rounded-lg p-2 text-h6 text-secondary-40">
      <FaRegFlag color="gray" size={16}/>
        <select id="options" className="w-full">
          <option value="" disabled selected hidden>Activity</option>
          {options.map(option => (
            <option value={option}>{option}</option>
          ))}
        </select>
      </div>
    </div>
    <InputField Icon={FiUsers} onChange={(e) => console.log(e)} placeholder="0" type="date" inputName="When" size="large" value=""/>
    <InputField Icon={FiUsers} onChange={(e) => console.log(e)} placeholder="0" type="text" inputName="Guests" size="large" value=""/>
    <SubmitButton text="Search" onClick={() => console.log('click')} size="small"/>
  </div>
}

export default SearchBar;