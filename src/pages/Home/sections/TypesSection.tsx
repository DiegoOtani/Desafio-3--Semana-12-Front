import Slider from "../../../components/Slider";
import Titles from "../../../components/Titles";
import TypeCard from "../components/TypeCard";
import { TypeCardProps } from "../components/TypeCard/types";
import { useState, useEffect } from "react";
import { TypesReceived } from "../../../interfaces/Types";
import TypesService from "../../../services/api/typesService";
import getIconsForType from "../../../helpers/iconHelper";

const TypesSection = () => {

  const [types, setTypes] = useState<TypesReceived[]>([]);
  
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

  const typeCardPropsList: TypeCardProps[] = types.map(type => ({
    Icon: getIconsForType(type.type_name),
    type: type.type_name,
    tours: type.tour_count,
    minValue: type.min_price ?? 0,
  }));

  return <section className="w-[80%] flex flex-col items-center gap-8 py-20 border-t">
    <Titles colorTitle="black" size="medium" subtitle="Browse By Category" title="Pick A Tour Type"/>
    <Slider renderItem={TypeCard} items={typeCardPropsList} perPage={6} />
  </section>
}

export default TypesSection;