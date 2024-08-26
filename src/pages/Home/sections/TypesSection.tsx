import { FaHiking } from "react-icons/fa";
import Slider from "../../../components/Slider";
import Titles from "../../../components/Titles";
import TypeCard from "../components/TypeCard";
import { TypeCardProps } from "../components/TypeCard/types";

const TypesSection = () => {

  const typeCardProps: TypeCardProps = {
    Icon: FaHiking,
    type: "Adventure",
    tours: 10,
    minValue: 250,
  };

  return <section className="w-full flex flex-col gap-8 p-20">
    <Titles colorTitle="black" size="medium;" subtitle="Browse By Category" title="Pick A Tour Type"/>
    <Slider renderItem={TypeCard} items={[typeCardProps, typeCardProps, typeCardProps, typeCardProps, typeCardProps, typeCardProps, typeCardProps]} perPage={6} />
  </section>
}

export default TypesSection;