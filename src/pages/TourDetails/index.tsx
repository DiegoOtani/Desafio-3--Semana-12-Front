import AsidePurchase from "./sections/AsidePurchase";
import ImageSection from "./sections/ImageSection";
import InfoSection from "./sections/InfoSection";
import OverviewSection from "./sections/OverviewSection";

const TourDetails = () => {
  return <main className="w-full flex justify-center gap-6 px-32 py-10">
    <div className="w-full flex flex-col">
      <ImageSection imgUrl="/background-baloon.jpg"/>
      <h1 className="text-h3 font-extrabold text-secondary font-title">Wonders of the West Coast & Kimberly</h1>
      <InfoSection min_price="104" duration="7" max_people="25" min_age="12" types="Adventure, Beaches" average="4.8" count_review="15"/>
      <OverviewSection />
    </div>
    <AsidePurchase min_price="104"/> 
  </main>
};

export default TourDetails;