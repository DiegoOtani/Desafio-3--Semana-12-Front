import AsidePurchase from "./sections/AsidePurchase";
import ImageSection from "./sections/ImageSection";
import InfoSection from "./sections/InfoSection";
import OverviewSection from "./sections/OverviewSection";
import MapSection from "./sections/MapSection";
import ReviewSection from "./sections/ReviewsSection";
import ReviewComment from "./components/ReviewComment";
import AddReviewSection from "./sections/AddReviewSection";
import { RiMapPinLine } from "react-icons/ri";
import { useParams, useNavigate } from "react-router-dom";
import TourService from "../../services/api/toursService";
import { useState, useEffect } from "react";
import { TourReturned } from "../../interfaces/Tour";

const TourDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [tour, setTour] = useState<TourReturned | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadTour = async () => {
      try {
        const data = await TourService.getTourById(id);
        if (data) {
          setTour(data);
        } else {
          setError('Tour not found');
          navigate('/error');
        }
      } catch (error) {
        console.error(error);
        setError('Failed to load tour');
        navigate('/error');
      } finally {
        setLoading(false);
      }
    };

    loadTour();
  }, [id, navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!tour) {
    return <div>Tour not found</div>;
  }

  const coordinates = tour.location.split(',').map(coord => parseFloat(coord.trim())) as [number, number]

  return (
    <main className="w-full flex justify-center gap-6 px-32 py-10">
      <div className="w-full flex flex-col gap-6">
        <ImageSection imgUrl={tour.ulrImg} />
        <div className="flex items-center gap-2">
          <RiMapPinLine size={20} color="rgba(5, 16, 54, 0.6)" />
          <span className="text-bodyColor">{tour.city}, {tour.country_name}</span>
          <a href="#map-section" className="text-brand_2 hover:text-red-500 hover:font-bold">View on map</a>
        </div>
        <h1 className="text-h4 font-extrabold text-secondary font-title">{tour.tour_name}</h1>
        <InfoSection 
          min_price={tour.price_per_person?.toString() || 'N/A'} 
          duration={tour.duration?.toString() || 'N/A'} 
          max_people={tour.max_people.toString()} 
          min_age={tour.min_age.toString()} 
          types={tour.types} 
          average={tour.average_review?.toString() || 'N/A'} 
          count_review={tour.review_count?.toString()}
        />
        <OverviewSection overview={tour.overview}/>
        <MapSection coordinates={coordinates} city="Rio de Janeiro" country="Brasil" />
        <h1 className="text-h5 font-extrabold text-secondary font-title">Average Reviews</h1>
        <ReviewSection />
        <h1 className="text-h5 font-extrabold text-secondary font-title">Showing 1 review</h1>
        <ReviewComment 
          key={'Simon Simmons Review'}
          review="asdsaddas" 
          date="March 20, 2022" 
          name="Sindy Simmons"
          average_review={4.8} 
          count_review={15} 
        />
        <AddReviewSection />
      </div>
      <AsidePurchase min_price={tour.price_per_person.toString()} />
    </main>
  );
};

export default TourDetails;
