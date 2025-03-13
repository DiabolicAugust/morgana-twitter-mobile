import axios from 'axios';
import { LegendDto } from '../dto/LegendDto';

const API_URL = 'http://192.168.0.195:3000/legend';

export const fetchLegends = async (
  page: number,
  amount: number
): Promise<{ legends: LegendDto[]; page: number; amount: number }> => {
  try {
    const response = await axios.get(`${API_URL}?page=${page}&amount=${amount}`);

    const { legends, page: currentPage, amount: currentAmount } = response.data;

    return {
      legends: legends.map((legend: any) => new LegendDto(legend)),
      page: currentPage,
      amount: currentAmount,
    };
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.message || `Error: ${error.response.status}`);
    } else if (error.request) {
      throw new Error('Network error. Please check your internet connection.');
    } else {
      throw new Error('Something went wrong. Please try again later.');
    }
  }
};
