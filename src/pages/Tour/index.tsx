import NavSection from "../../components/NavSection";
import Filters from "./components/Filters";
import { useState, useEffect } from "react";
import { TourReturned } from "../../interfaces/Tour";
import TourService from "../../services/api/toursService";
import TourCard from "../../components/TourCard";
import Pagination from "./components/Pagination";
import { FaArrowDownLong } from "react-icons/fa6";

const Tour = () => {
  const [tours, setTours] = useState<TourReturned[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [totalTours, setTotalTours] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const limit = 9;

  const [categories, setCategories] = useState<string[]>([]);
  const [destinations, setDestinations] = useState<string[]>([]);
  const [rating, setRating] = useState<string[]>([]);

  useEffect(() => {
    console.log(categories, destinations, rating)
  }, [categories, destinations, rating])

  useEffect(() => {
    const loadTours = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await TourService.getToursByPage(currentPage, limit, categories, destinations, rating);
        setTours(data.tours);
        setTotalPages(data.totalPages);
        setTotalTours(data.total);
      } catch (error) {
        setError("Failed to load tours. Please try again later.");
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    loadTours();
  }, [currentPage, categories, destinations, rating]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleCategorieChange = (category: string, isChecked: boolean) => {
    setCategories(prevCategories => isChecked
      ? [...prevCategories, category] 
      : prevCategories.filter(pCategory => pCategory !== category 
    ));
  };

  const handelDestinationChange = (destination: string, isChecked: boolean) => {
    setDestinations((prevDestination => isChecked 
      ? [...prevDestination, destination] 
      :  prevDestination.filter((pDestination) => pDestination !== destination)
    ));
  };

  const handleRatingChange = (rating: string, isChecked: boolean) => {
    setRating(prevRating => {
      const ratingValue = rating.split(' ')[0];
      if (isChecked) {
        return [...prevRating, ratingValue];
      } else {
        return prevRating.filter(pRating => pRating !== ratingValue);
      }
    });
  };

  return (  
    <>
      <NavSection previousPages={[{ name: 'Home', to: '/' }]} actualPage="Tour Package" />
      <main className="bg-white flex gap-6 p-32">
        <Filters 
          onCategoryChange={handleCategorieChange} 
          onDestinationChange={handelDestinationChange}
          onRatingChange={handleRatingChange}
        />
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
          
          {loading ? (
            <div className="text-center min-h-[1000px] text-h6 ">Loading tours...</div>
          ) : error ? (
            <div className="text-center text-red-500 text-h6">{error}</div>
          ) : (
            <>
              <div className="grid grid-cols-3 min-w-[75%]">
                {tours.map(tour => (
                  <TourCard 
                    key={tour.tour_id} 
                    {...tour}
                  />
                ))}
              </div>
              <Pagination actualPage={currentPage} totalPages={totalPages} handlePageChange={handlePageChange}/>
            </>
          )}
        </section>
      </main>
    </>
  );
};

export default Tour;
