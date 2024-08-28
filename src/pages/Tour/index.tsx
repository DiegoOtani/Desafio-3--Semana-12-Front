import NavSection from "../../components/NavSection";
import Filters from "./Components/Filters";
import { useState, useEffect } from "react";
import { TourReturned } from "../../interfaces/Tour";
import TourService from "../../services/api/toursService";
import TourCard from "../../components/TourCard";

const Tour = () => {
  const [tours, setTours] = useState<TourReturned[]>([]);

  useEffect(() => {
    const loadTours = async () => {
      try {
        const data = await TourService.getTours();
        setTours(data);
        console.log(data)
      } catch (error) {
        console.log(error);
      }
    };
    loadTours();
  }, []);

  return (
    <>
      <NavSection previousPages={[{ name: 'Home', to: '/' }]} actualPage="Tour Package" />
      <main className="bg-white flex gap-10 p-32">
        <Filters />
        <section className="grid grid-cols-3 min-w-[70%]">
          {tours.map(tour => (
            <TourCard 
              key={tour.tour_id} 
              {...tour}
            />
          ))}
        </section>
      </main>
    </>
  );
};

export default Tour;
