import axios from "axios";
import { api } from "./api";
import { ReviewReturned, ReviewUserReturnded, PostReview, CompleteReview } from "../../interfaces/review";

class ReviewService {
  static async getReviewAverageByTourId (tourId: string | undefined) {
    try {
      if(tourId === undefined) return;
      const response = await api.get<{review: ReviewReturned}>(`/review/avg/${tourId}`);
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

  static async getReviewsById(tourId: string | undefined) {
    try {
      if(tourId === undefined) return;
      const response = await api.get<{reviews: ReviewUserReturnded[]}>(`/review/tour/${tourId}`);
      return response.data.reviews;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Error fetching types:', error.message);
      } else {
        console.error('Unexpected error:', error);
      }
      throw error;
    }
  };

  static async postReview(reviewData: PostReview) {
    try {
      const response = await api.post<{ review: CompleteReview, message:string }>(`/review`, reviewData);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Error fetching types:', error.message);
      } else {
        console.error('Unexpected error:', error);
      }
      throw error;
    }
  };
};

export default ReviewService;