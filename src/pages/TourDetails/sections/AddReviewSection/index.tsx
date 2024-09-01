import { useEffect, useState } from "react";
import StarRating from "../../components/StarRating";
import SubmitButton from "../../../../components/SubmitButton";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const AddReviewSection = () => {
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
      <SubmitButton size="very small" onClick={() => console.log(rating.prices)} text="Submit review"/>
    </form>
  </section>
};

export default AddReviewSection;