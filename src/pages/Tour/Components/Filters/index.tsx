import Categories from "../../../../components/Categories";
import { useState, useEffect } from "react";
import { TypesReceived } from "../../../../interfaces/Types";
import TypesService from "../../../../services/api/typesService";

const Filters = () => {
  const [types, setTypes] = useState<TypesReceived[]>([]);

  useEffect(() => {
    const loadTypes = async() => {
      try {
        const data = await TypesService.getTypes();
        setTypes(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    loadTypes();
  }, []);

  return <aside>
    <Categories title="Categories" categories={types.map(type => type.type_name)}/>
    <Categories title="Reviews" categories={['5 Stars', '4 Stars & Up', '3 Stars & Up', '3 Stars & Up', '1 Stars & Up',]}/>
  </aside>
};

export default Filters;