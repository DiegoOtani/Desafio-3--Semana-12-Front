import { FaStar } from "react-icons/fa6";
import ReviewResult from "../../components/ReviewResult";

const ReviewSection = () => {
  return <section className="w-[100%] flex justify-center items-center gap-4">
    <div className="bg-brand_2 flex flex-col justify-center items-center text-white font-body py-[75px] px-16">
      <span className="text-large font-bold">4.8</span>
      <div className="flex justify-center items-center gap-2">
        <FaStar size={20}/>
        <span className="text-h6 font-title">Excellent</span>
      </div>
    </div>
    <div className="grid grid-cols-2 p-6 gap-x-10 gap-y-2 w-[70%]">
      <ReviewResult categorie="Services" rating="4.0"/>
      <ReviewResult categorie="Prices" rating="4.0"/>
      <ReviewResult categorie="Locations" rating="2.8"/>
      <ReviewResult categorie="Food" rating="3.5"/>
      <ReviewResult categorie="Amenities" rating="3.0"/>
      <ReviewResult categorie="Room confort and quality" rating="4.6"/>
    </div>
  </section>
}

export default ReviewSection;