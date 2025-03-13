import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { loginRequest, registerRequest } from '../api/auth';

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  initializeAuth: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => {
  return {
    isAuthenticated: false,
    token: null,

    login: async (email: string, password: string) => {
      try {
        const { token } = await loginRequest(email, password);
        await AsyncStorage.setItem('token', token);
        set({ isAuthenticated: true, token });
      } catch (error: any) {
        if (error.response?.data?.message) {
          throw new Error(error.response.data.message);
        } else if (error.message) {
          throw new Error(error.message);
        } else {
          throw new Error('An unknown error occurred');
        }
      }
    },

    register: async (email: string, username: string, password: string) => {
      try {
        await registerRequest(email, username, password);
      } catch (error: any) {
        if (error.response?.data?.message) {
          throw new Error(error.response.data.message);
        } else if (error.message) {
          throw new Error(error.message);
        } else {
          throw new Error('An unknown error occurred');
        }
      }
    },

    logout: async () => {
      await AsyncStorage.removeItem('token');
      set({ isAuthenticated: false, token: null });
    },

    initializeAuth: async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        console.log('✅ Token found in storage:', token);
        set({ isAuthenticated: true, token });
      }
    },
  };
});
