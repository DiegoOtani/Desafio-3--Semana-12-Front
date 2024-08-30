import { FaStar } from "react-icons/fa";
import { useState } from "react";
import { StarRatingProps } from "./types";

const StarRating = ({ name, onChange }: StarRatingProps) => {
  const [rating,setRating] = useState<number>(0);
  const starValues = [1, 2, 3, 4, 5];

  const handleClick = (ratingValue: number) => {
    setRating(ratingValue);
    onChange(ratingValue);
  };

  return <div className="flex flex-col gap-2 py-4">
    <h2 className="text-secondary-80 text-h6 font-semibold font-title">{name}</h2>
    <div className="flex">
      {starValues.map(value =>  (
        <FaStar 
          key={value}
          size={24}
          style={{ cursor: "pointer", marginRight: 10 }}
          color={value <= rating ? "#fc5056" : "rgba(5, 16, 54, 0.2)"}
          onClick={() => handleClick(value)}
        />
      ))}
    </div>
  </div>
};

export default StarRating;