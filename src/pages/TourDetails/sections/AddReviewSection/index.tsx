import { useEffect, useState } from "react";
import StarRating from "../../components/StarRating";
import SubmitButton from "../../../../components/SubmitButton";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import ReviewService from "../../../../services/api/reviewService";

type AddReviewSectionPros = {
  tour_id: string;
};

const AddReviewSection = ({ tour_id }: AddReviewSectionPros) => {
  const [userId, setUserId] = useState<string | null>("");
  const [name ,setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  const [rating, setRating] = useState<{[key: string]: number}>({
    services: 0,
    locations: 0,
    amentities: 0,
    prices: 0,
    comfort: 0,
  });

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if(user) return setUserId(user.uid);
      setUserId(null);
    });
    return () => unsubscribe();
  }, [userId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "name") setName(value);
    if (name === "email") setEmail(value);
    if (name === "comment") setComment(value);
  };

  const handleRatingChange = (key: string) => (rating: number) => {
    setRating((prevRatings) => ({
      ...prevRatings,
      [key]: rating,
    }));
  };

  const handleSubmit = async() => {
    if(!userId) return;

    const totalRatings = Object.values(rating).reduce((a, b) => a + b);
    const average = parseFloat((totalRatings / Object.keys(rating).length).toFixed(1));

    const reviewData = {
      name,
      email, 
      comment,
      services: rating.services,
      locations: rating.locations,
      amenities: rating.amenities,
      prices: rating.prices,
      food: rating.food,
      room_comfort_quality: rating.comfort,
      average,
      date_review: new Date().toISOString(),
      user_id: userId,
      tour_id,
    };

    try {
      console.log(reviewData);
      const result = await ReviewService.postReview(reviewData);
      console.log(result);
    } catch (error) {
      console.error("Failed to post review:", error);
    }
  };

  return <section className="bg-surface p-10">
    <h2 className="text-secondary font-extrabold text-h5 pb-2">Add a review</h2>
    <div className="grid grid-cols-4">
      <StarRating onChange={handleRatingChange("services")} name="Services" key="Services"/>
      <StarRating onChange={handleRatingChange("locations")} name="Locations" key="Locations"/>
      <StarRating onChange={handleRatingChange("amenities")} name="Amenities" key="Amenities"/>
      <StarRating onChange={handleRatingChange("prices")} name="Prices" key="Prices"/>
      <StarRating onChange={handleRatingChange("comfort")} name="Room comfort and quality" key="Room comfort and quality"/>
      <StarRating onChange={handleRatingChange("food")} name="Food" key="Food"/>
    </div>
    <form className="w-full flex flex-col gap-4 pt-10 text-bodyColor text-h6">
      <div className="w-full flex gap-10">
        <input className="p-6 w-full focus:outline-none"
          type="text" 
          placeholder="Your name"
          name="name"
          value={name}
          onChange={handleChange}
        />
        <input className="p-6 w-full focus:outline-none"
          type="email" 
          placeholder="Email adress"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </div>
      <input className="p-6 pb-20 w-full focus:outline-none"
        type="text" 
        placeholder="Write your comment"
        name="comment"
        value={comment}
        onChange={handleChange}
      />
      <SubmitButton size="very small" onClick={handleSubmit} text="Submit review"/>
    </form>
  </section>
};

export default AddReviewSection;