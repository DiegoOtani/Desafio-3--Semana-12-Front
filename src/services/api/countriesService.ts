import axios from "axios";
import { api } from "./api";

class CountryService {
  static async getCountriesByCont() {
    try {
      const response = await api.get('/country/cont');
      return response.data
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

export default CountryService;