import axios from "axios";
import { api } from "./api";
import { ReviewReturned } from "../../interfaces/review";

class ReviewService {
  static async getReviewAverageByTourId (tourId: string | undefined) {
    try {
      if(tourId === undefined) return;
      const response = await api.get<{review: ReviewReturned}>(`/review/avg/${tourId}`)
      console.log(response.data);
      return response.data.review;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Error fetching types:', error.message);
      } else {
        console.error('Unexpected error:', error);
      }
      throw error;
    };
  };
};

export default ReviewService;