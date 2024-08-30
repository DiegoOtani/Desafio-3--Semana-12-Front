import { Link } from "react-router-dom";
import SearchBar from "../SearchBar";
import { NavSectionProps } from "./types";
import { useState, useEffect } from "react";
import TypesService from "../../services/api/typesService";
import { TypesReceived } from "../../interfaces/Types";


const NavSection = ({ previousPages, actualPage }: NavSectionProps) => {

  const [types, setTypes] = useState<TypesReceived[]>([]);

  useEffect(() => {
    const loadTypes = async() => {
      try {
        const data = await TypesService.getTypes();
        setTypes(data);
      } catch (error) {
        console.log(error);
      };
    }
    loadTypes();
  });

  return <section className={`
      relative w-full flex flex-col items-center justify-center min-h-40 
      bg-[url('/background-baloon.jpg')] bg-cover bg-center h-screen max-h-[350px]
    `}>
    <div className="absolute inset-0 bg-black opacity-60"></div>
    <h1 className="text-large font-title text-white font-bold z-10">
      {actualPage}
    </h1>
    <nav className="flex gap-2 text-h6 font-body font-bold text-white z-10">
      {previousPages.map(page => (
        <>
          <Link to={page.to}  className="">
            {page.name}
          </Link>
          <span>/</span>
        </>
        
      ))}
      
      <span className="text-brand_2 pb-20">
        {actualPage}
      </span>
    </nav>
    <SearchBar options={types.map(type => type.type_name)}/>
  </section>
};

export default NavSection;