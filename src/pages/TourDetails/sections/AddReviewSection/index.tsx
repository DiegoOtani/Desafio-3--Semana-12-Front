import { useState } from "react";
import StarRating from "../../components/StarRating";
import SubmitButton from "../../../../components/SubmitButton";

const AddReviewSection = () => {

  const [rating, setRating] = useState<{[key: string]: number}>({
    services: 0,
    locations: 0,
    amentities: 0,
    prices: 0,
    comfort: 0,
  })

  const handleRatingChange = (key: string) => (rating: number) => {
    setRating((prevRatings) => ({
      ...prevRatings,
      [key]: rating,
    }));
  }

  return <section className="bg-surface p-10">
    <h2 className="text-secondary font-extrabold text-h5 pb-2">Add a review</h2>
    <div className="grid grid-cols-4">
      <StarRating onChange={handleRatingChange("services")} name="Services" key="Services"/>
      <StarRating onChange={handleRatingChange("locations")} name="Locations" key="Locations"/>
      <StarRating onChange={handleRatingChange("amenities")} name="Amenities" key="Amenities"/>
      <StarRating onChange={handleRatingChange("prices")} name="Prices" key="Prices"/>
      <StarRating onChange={handleRatingChange("comfort")} name="Room comfort and quality" key="Room comfort and quality"/>
    </div>
    <form className="w-full flex flex-col gap-4 pt-10 text-bodyColor text-h6">
      <div className="w-full flex gap-10">
        <input className="p-6 w-full focus:outline-none"
          type="text" 
          placeholder="Your name"
        />
        <input className="p-6 w-full focus:outline-none"
          type="email" 
          placeholder="Email adress"
        />
      </div>
      <input className="p-6 pb-20 w-full focus:outline-none"
        type="text" 
        placeholder="Write your comment"
      />
      <SubmitButton size="small" onClick={() => console.log(rating.prices)} text="Submit review"/>
    </form>
  </section>
};

export default AddReviewSection;