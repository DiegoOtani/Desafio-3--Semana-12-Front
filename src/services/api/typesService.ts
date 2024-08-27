import axios from "axios";
import { api } from "./api";
import { TypesReceived } from "../../interfaces/Types";

class TypesService {
  static async getTypes(): Promise<TypesReceived[]> {
    try {
      const response = await api.get<{types: TypesReceived[]}>('/type');
      console.log(response.data)
      return response.data.types;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Error fetching types:', error.message);
      } else {
        console.error('Unexpected error:', error);
      }
      throw error;
    }
  }
};

export default TypesService;