import Stars from "../../../../components/Stars";
import { FaUserCircle } from "react-icons/fa";
import { ReviewCommentProps } from "./types";

const ReviewComment = ({ date, name, average_review, count_review, review }: ReviewCommentProps) => {
  return <section className="flex border gap-4 p-10 w-[90%]">
    <div className="h-full">
      <FaUserCircle color="gray" size={120}/>
    </div>
    <div className="flex flex-col gap-2 font-body text-bodyColor">
      <p className="text-subtitle">{date}</p>
      <h3 className="font-bold text-secondary text-h5 font-title">{name}</h3>
        <div className="flex gap-2 items-center">
          <Stars value={average_review}/>
          <span>{count_review} reviews</span>
      </div>
      <p className="text-h6 font-body font-bold text-secondary-40 pt-4">{review}</p>
    </div>
  </section>
}

export default ReviewComment;