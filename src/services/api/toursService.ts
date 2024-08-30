import axios from "axios";
import { api } from "./api";
import { TourReturned } from "../../interfaces/Tour";

class TourService {
  static async getTours() {
    try {
      const response = await api.get<{tours: TourReturned[]}>('/tour');
      return response.data.tours;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Error fetching types:', error.message);
      } else {
        console.error('Unexpected error:', error);
      }
      throw error;
    }
  };

  static async getToursByPage(page: number, limit: number) {
    try {
      const response = await api.get('/tour/page', {
        params: {
          page,
          limit
        }
      });
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

  static async getTourById(id: string | undefined) {
    if(id === undefined) return;
    try {
      const response = await api.get(`/tour/${id}`);
      console.log(response.data.tour)
      return response.data.tour;
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

export default TourService;