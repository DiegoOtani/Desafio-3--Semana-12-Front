import axios from "axios";
import { api } from "./api";
import { CountryByContinent } from "../../interfaces/Country";

class CountryService {
  static async getCountriesByCont() {
    try {
      const response = await api.get<{countries: CountryByContinent[]}>('/country/cont');
      return response.data.countries;
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