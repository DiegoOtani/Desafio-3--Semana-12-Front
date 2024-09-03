import { Link } from "react-router-dom";
import SearchBar from "../SearchBar";
import { NavSectionProps } from "./types";
import { useState, useEffect } from "react";
import TypesService from "../../services/api/typesService";
import { TypesReceived } from "../../interfaces/Types";
import React from "react";

const NavSection = ({ previousPages, actualPage }: NavSectionProps) => {

  const [types, setTypes] = useState<TypesReceived[]>([]);

  useEffect(() => {
    const loadTypes = async() => {
      try {
        const data = await TypesService.getTypes();
        setTypes(data);
      } catch (error) {
        console.error(error);
      };
    }
    loadTypes();
  });

  return <section className={`
      relative w-full flex flex-col items-center justify-center min-h-40 
      bg-[url('https://firebasestorage.googleapis.com/v0/b/trisog-travels.appspot.com/o/bg.jpeg?alt=media&token=efb10064-49be-414c-95d2-a0d4c9ee6589')] bg-cover bg-center h-screen max-h-[350px]
    `}>
    <div className="absolute inset-0 bg-black opacity-60"></div>
    <h1 className="text-large font-title text-white font-bold z-10">
      {actualPage}
    </h1>
    <nav className="flex gap-2 text-h6 font-body font-bold text-white z-10">
      {previousPages.map(page => (
        <React.Fragment key={page.name}>
          <Link to={page.to}>
            {page.name}
          </Link>
          <span>/</span>
        </React.Fragment>
        
      ))}
      
      <span className="text-brand_2 pb-20">
        {actualPage}
      </span>
    </nav>
    <SearchBar options={types.map(type => type.type_name)}/>
  </section>
};

export default NavSection;