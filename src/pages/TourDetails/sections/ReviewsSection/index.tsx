import { FaStar } from "react-icons/fa6";
import ReviewResult from "../../components/ReviewResult";
import { ReviewReturned } from "../../../../interfaces/review";
import { useState, useEffect } from "react";
import ReviewService from "../../../../services/api/reviewService";
import { useParams } from "react-router-dom";

const ReviewSection = () => {
  const { id } = useParams();

  const [reviewAvg, setReviewAvg] = useState<ReviewReturned | undefined | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadReviewAvg = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await ReviewService.getReviewAverageByTourId(id);
        setReviewAvg(data);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        setError("Failed to load review data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    loadReviewAvg();
  }, [id]);

  const getSatisfactionLevel = (average: number): string => {
    if (average >= 4.5) return "Excellent";
    if (average >= 3.5) return "Good";
    if (average >= 2.5) return "Average";
    if (average >= 1.5) return "Poor";
    return "Very Poor";
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!reviewAvg) {
    return <div>Tour not found</div>;
  }

  return (
    <section className="w-[100%] flex justify-center items-center gap-4">
      <div className="bg-brand_2 flex flex-col justify-center items-center text-white font-body py-[75px] px-16">
        <span className="text-large font-bold">{reviewAvg.avg_overall.toFixed(1)}</span>
        <div className="flex justify-center items-center gap-2">
          <FaStar size={20} />
          <span className="text-h6 font-title">
            {getSatisfactionLevel(reviewAvg.avg_overall)}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 p-6 gap-x-10 gap-y-2 w-[70%]">
        <ReviewResult categorie="Services" rating={reviewAvg.avg_services?.toFixed(1).toString() || "N/A"} />
        <ReviewResult categorie="Prices" rating={reviewAvg.avg_prices?.toFixed(1).toString() || "N/A"} />
        <ReviewResult categorie="Locations" rating={reviewAvg.avg_locations?.toFixed(1).toString() || "N/A"} />
        <ReviewResult categorie="Food" rating={reviewAvg.avg_food?.toFixed(1).toString() || "N/A"} />
        <ReviewResult categorie="Amenities" rating={reviewAvg.avg_amenities?.toFixed(1).toString() || "N/A"} />
        <ReviewResult categorie="Room comfort and quality" rating={reviewAvg.avg_room_comfort_quality?.toFixed(1).toString() || "N/A"} />
      </div>
    </section>
  );
};

export default ReviewSection;
