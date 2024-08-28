import { TourReturned } from "../../interfaces/Tour";
import TypesSection from "./sections/TypesSection";
import SearchSection from "./sections/SearchSection";
import InfoSection from "./sections/InfoSection";
import GuideSections from "./sections/GuideSections";
import TestimonialsSection from "./sections/TestimonialsSection";
import ExperienceSection from "./sections/ExperienceSection";
import ToursSection from "./sections/ToursSection";
import DestinationsSection from "./sections/DestinationsSection";
import { useState, useEffect } from "react";
import { TypesReceived } from "../../interfaces/Types";
import TypesService from "../../services/api/typesService";
import TourService from "../../services/api/toursService";

const Home = () => {
  const [types, setTypes] = useState<TypesReceived[]>([]);
  const [tours, setTours] = useState<TourReturned[]>([]);

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

  useEffect(() => {
    const loadTours = async() => {
      try {
        const data = await TourService.getTours();
        setTours(data);
      } catch (error) {
        console.log(error);
      };
    };
    loadTours();
  }, []);

  useEffect(() => {
    console.log(tours);
  }, [tours])

  return <main className="w-full flex flex-col items-center gap-32">
    <SearchSection options={types.map(type => type.type_name)} />
    <ToursSection toursData={tours}/>
    <InfoSection />
    <DestinationsSection />
    <ExperienceSection />
    <TypesSection />
    <TestimonialsSection />
    <GuideSections />
  </main>
};

export default Home;