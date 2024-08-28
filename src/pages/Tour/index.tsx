import NavSection from "../../components/NavSection";
import Filters from "./Components/Filters";
import { useState, useEffect } from "react";
import { TourReturned } from "../../interfaces/Tour";
import TourService from "../../services/api/toursService";
import TourCard from "../../components/TourCard";
import Pagination from "./Components/Pagination";
import { FaArrowDownLong } from "react-icons/fa6";

const Tour = () => {
  const [tours, setTours] = useState<TourReturned[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [totalTours, setTotalTours] = useState<number>(0);
  const limit = 9;

  useEffect(() => {
    const loadTours = async () => {
      try {
        const data = await TourService.getToursByPage(currentPage, limit);
        setTours(data.tours);
        setTotalPages(data.totalPages);
        setTotalTours(data.total);
      } catch (error) {
        console.log(error);
      }
    };
    loadTours();
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (  
    <>
      <NavSection previousPages={[{ name: 'Home', to: '/' }]} actualPage="Tour Package" />
      <main className="bg-white flex gap-6 p-32">
        <Filters />
        <section className="min-w-[75%] flex flex-col ">
          <div className="w-full flex justify-between text-secondary-40 p-6 text-h6 font-body">
            <span>{totalTours} Tours</span>
            <div className="flex items-center">
              <span>Sort by</span>
              <FaArrowDownLong color="051036"/>
              <select id="sort-by" className="border focus:outline-none rounded p-1 pr-32">
                <option value="Title" selected>
                  Title
                </option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-3 min-w-[75%]">
            {tours.map(tour => (
              <TourCard 
                key={tour.tour_id} 
                {...tour}
              />
            ))}
          </div>
          <Pagination actualPage={currentPage} totalPages={totalPages} handlePageChange={handlePageChange}/>
        </section>
      </main>
    </>
  );
};

export default Tour;
