import AsidePurchase from "./sections/AsidePurchase";
import ImageSection from "./sections/ImageSection";
import InfoSection from "./sections/InfoSection";
import OverviewSection from "./sections/OverviewSection";
import MapSection from "./sections/MapSection";
import ReviewSection from "./sections/ReviewsSection";
import ReviewComment from "./components/ReviewComment";
import AddReviewSection from "./sections/AddReviewSection";
import { RiMapPinLine } from "react-icons/ri"

const TourDetails = () => {
  return <main className="w-full flex justify-center gap-6 px-32 py-10">
    <div className="w-full flex flex-col gap-6">
      <ImageSection imgUrl="/background-baloon.jpg"/>
      <div className="flex items-center gap-2">
        <RiMapPinLine size={20} color="rgba(5, 16, 54, 0.6"/>
        <span className="text-bodyColor">Budapest, Hungary</span>
        <a href="#map-section" className="text-brand_2 hover:text-red-500 hover:font-bold">View on map</a>
      </div>
      <h1 className="text-h4 font-extrabold text-secondary font-title">Wonders of the West Coast & Kimberly</h1>
      <InfoSection min_price="104" duration="7" max_people="25" min_age="12" types="Adventure, Beaches" average="4.8" count_review="15"/>
      <OverviewSection />
      <MapSection coordinates={[-22.9068, -43.1729]} city="Rio de Janeiro" country="Brasil"/>
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
    <AsidePurchase min_price="104"/> 
  </main>
};

export default TourDetails;