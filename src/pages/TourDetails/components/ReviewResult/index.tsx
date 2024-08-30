import ProgressBar from "../ProgressBar";
import { ReviewResultProps } from "./types";

const ReviewResult = ({ categorie, rating }: ReviewResultProps) => {
  return <div className="w-full flex flex-col gap-1 text-secondary-80 text-h6 font-body font-semibold">
    <span>{categorie}</span>
    <div className="flex items-center gap-2">
      <ProgressBar value={Number(rating)} key={categorie}/>
      <span>{rating.toString()}</span>
    </div>
  </div>
};

export default ReviewResult;