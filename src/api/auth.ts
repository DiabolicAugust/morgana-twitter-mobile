import axios from 'axios';
import { UserDto } from '../dto/UserDto';
import { User } from '../models/User';

const API_URL = 'http://192.168.0.195:3000/authorization';

export const loginRequest = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data;
  } catch (error: any) {
    console.log('❌ Raw Error:', error);

    if (error.response && error.response.data) {
      throw error.response.data;
    } else if (error.message) {
      throw new Error(error.message);
    } else {
      throw new Error('An unknown error occurred');
    }
  }
};

export const registerRequest = async (email: string, name: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/registration`, {
      email,
      name,
      password,
    });
    const user = new UserDto(response.data);
    return user;
  } catch (error: any) {
    console.log('❌ Raw Error:', error.response.data);

    if (error.response && error.response.data) {
      throw error.response.data;
    } else if (error.message) {
      throw new Error(error.message);
    } else {
      throw new Error('An unknown error occurred');
    }
  }
};
