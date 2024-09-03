import NavSection from "../../components/NavSection";
import Filters from "./components/Filters";
import React, { useState, useEffect } from "react";
import { TourReturned } from "../../interfaces/Tour";
import TourService from "../../services/api/toursService";
import TourCard from "../../components/TourCard";
import Pagination from "./components/Pagination";
import { FaArrowDownLong } from "react-icons/fa6";
import { useSearchParams } from "react-router-dom";

const Tour = () => {
  const [searchParams] = useSearchParams();

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
  const [price, setPrice] = useState<number>(0);
  const [priceFilter, setPriceFilter] = useState<number>(price);
  const [search, setSearch] = useState<string>('');
  const [date, setDate] = useState<string>("");
  
  useEffect(() => {
    const categorie = searchParams.get('categorie');
    const country = searchParams.get('country');
    const searchValue = searchParams.get('search');
    const date = searchParams.get('date');
    setCategories(categorie ? [categorie] : []);
    setDestinations(country ? [country] : []);
    setSearch(searchValue ? searchValue : '');
    setDate(date ? date : '');
  }, [searchParams]);

  useEffect(() => {
    const loadTours = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await TourService.getToursByPage(currentPage, limit, categories, destinations, rating, search, priceFilter, date);
        setTours(data.tours);
        setTotalPages(data.totalPages);
        setTotalTours(data.total);
      } catch (error) {
        setError("Failed to load tours. Please try again later.");
        console.error(error)
      } finally {
        setLoading(false);
      }
    };
    loadTours();
  }, [currentPage, categories, destinations, rating, search, priceFilter, date]);

  useEffect(() => {
    setCurrentPage(1);
  }, [categories, destinations, rating, search, priceFilter, date]);

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
      if (isChecked) {
        return [...prevRating, rating];
      } else {
        return prevRating.filter(pRating => pRating !== rating);
      }
    });
  };

  const handleRadioChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(e.target.value));
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handlePriceSubmit = () => {
    setPriceFilter(price);
  }

  return (  
    <>
      <NavSection previousPages={[{ name: 'Home', to: '/' }]} actualPage="Tour Package" />
      <main className="bg-white flex gap-6 p-32">
        <Filters 
          key={"Filters"}
          search={search}
          price={price}
          categories={categories}
          destinations={destinations}
          reviews={rating}
          onSearchChange={handleSearchChange}
          onCategoryChange={handleCategorieChange} 
          onDestinationChange={handelDestinationChange}
          onRatingChange={handleRatingChange}
          onRadioChange={handleRadioChange}
          onPriceSubmit={handlePriceSubmit}
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
                <option value="Price">
                  Price
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
