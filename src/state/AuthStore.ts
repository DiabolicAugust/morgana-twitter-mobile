import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  login: (token: string) => Promise<void>;
  logout: () => Promise<void>;
  initializeAuth: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  token: null,

  login: async (token: string) => {
    await AsyncStorage.setItem('token', token);
    set({ isAuthenticated: true, token });
  },

  logout: async () => {
    await AsyncStorage.clear();
    set({ isAuthenticated: false, token: null });
  },

  initializeAuth: async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      set({ isAuthenticated: true, token });
    }
  },
}));
