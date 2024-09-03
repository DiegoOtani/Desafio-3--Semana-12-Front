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

  static async getToursByPage(
      page: number, 
      limit: number, 
      categories: string[], 
      destinations: string[], 
      rating: string[],
      search: string,
      price: number,
      date: string,
      sortBy: string,
    ) {
    try {
      const maxRating = rating.length ? Math.max(...rating.map(r => parseInt(r.split(' ')[0], 10))) : null;
      const response = await api.get('/tour/page', {
        params: {
          page,
          limit,
          categories: categories.length ? categories.join(",") : undefined,
          destinations: destinations.length ? destinations.join(",") : undefined,
          rating: maxRating ,
          search,
          price,
          date,
          sortBy
        }
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Error fetching tours:', error.message);
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