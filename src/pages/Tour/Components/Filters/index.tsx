import Categories from "../../../../components/Categories";
import { useState, useEffect } from "react";
import { TypesReceived } from "../../../../interfaces/Types";
import TypesService from "../../../../services/api/typesService";
import CountryService from "../../../../services/api/countriesService";
import { FiSearch } from "react-icons/fi";
import SubmitButton from "../../../../components/SubmitButton";
import { CountryByContinent } from "../../../../interfaces/Country";
import { FilterProps } from "./types";

const Filters = ({ onCategoryChange, onDestinationChange, onRatingChange }: FilterProps) => {
  const [types, setTypes] = useState<TypesReceived[]>([]);
  const [price, setPrice] = useState<number>(0);
  const [countriesByCont, setCountriesByCont] = useState<CountryByContinent[]>([]);

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(e.target.value));
  };

  useEffect(() => {
    const loadCount = async() => {
      try {
        const data = await CountryService.getCountriesByCont();
        setCountriesByCont(data);
      } catch (error) {
        console.error(error);
      };
    };
    loadCount();
  }, []);

  useEffect(() => {
    const loadTypes = async() => {
      try {
        const data = await TypesService.getTypes();
        setTypes(data);
      } catch (error) {
        console.log(error);
      }
    };
    loadTypes();
  }, []);

  return <aside className="w-full bg-white flex flex-col gap-10">
    <div className="w-full bg-surface flex flex-col gap-2 p-10 text-h6 font-body">
      <label className="font-extrabold">
        Search
      </label>
      <div className="flex items-center bg-white p-4 text-secondary-80">
        <input 
        className="w-full focus:outline-none"
          type="text" 
          placeholder="Type anything..."
        />
        <FiSearch size={28}/>
      </div>
    </div>
    <div className="w-full bg-surface flex flex-col gap-4 text-h6 font-body p-10">
      <label className="font-extrabold">
        Filter By
      </label>
      <input
        id="range"
        type="range"
        min={0}
        max={500}
        step={1}
        value={price}
        onChange={handleRadioChange}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand_2"
        style={{
          background: `linear-gradient(to right, #FC5056 ${price / 5}%, #e0e0e0 ${price / 5}%)`
        }}
      />
      <div className="w-full flex justify-between">
        <span>$0.00</span>
        <span className="font-extrabold">${price}.00</span>
      </div>
      <SubmitButton onClick={() => console.log('submit')} text="Submit" size="small"/>
    </div>
    <Categories title="Categories" categories={types.map(type => type.type_name)} onCategoryChange={onCategoryChange}/>
    <div className="bg-surface flex flex-col text-h6 font-body">
      <h3 className="font-extrabold pt-6 px-10">Destinations</h3>
      {countriesByCont.map((continentData) => (
        <Categories 
          key={continentData.continent} 
          subtitle={continentData.continent} 
          categories={continentData.countries.map(country => country.name)}
          onCategoryChange={onDestinationChange}
        />
      ))}
    </div>
    <Categories 
      title="Reviews" 
      categories={['5 Stars', '4 Stars & Up', '3 Stars & Up', '2 Stars & Up', '1 Stars & Up',]}
      onCategoryChange={onRatingChange}  
    />
  </aside>
};

export default Filters;