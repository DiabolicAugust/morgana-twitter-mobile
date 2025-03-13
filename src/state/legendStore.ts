import { create } from 'zustand';
import { fetchLegends } from '../api/legends';
import { LegendDto } from '../dto/LegendDto';

interface LegendState {
  legends: LegendDto[];
  page: number;
  amount: number;
  loading: boolean;
  error: string | null;
  loadMore: () => Promise<void>;
  refreshLegends: (amount?: number) => Promise<void>;
}

export const useLegendStore = create<LegendState>((set, get) => ({
  legends: [],
  page: 1,
  amount: 10,
  loading: false,
  error: null,

  loadMore: async () => {
    if (get().loading) return;

    set({ loading: true, error: null });
    try {
      const { legends, page, amount } = await fetchLegends(get().page, get().amount);

      set((state) => ({
        legends: [...state.legends, ...legends],
        page,
        amount,
        loading: false,
      }));
    } catch (error: any) {
      console.error('❌ Failed to load legends:', error);
      set({ loading: false, error: error.message || 'Failed to load legends' });
    }
  },

  refreshLegends: async (amount = 10) => {
    set({ loading: true, error: null });
    try {
      // ✅ Same fix here
      const { legends, page, amount: newAmount } = await fetchLegends(1, amount);

      set({ legends, page, amount: newAmount, loading: false });
    } catch (error: any) {
      console.error('❌ Failed to refresh legends:', error);
      set({ loading: false, error: error.message || 'Failed to refresh legends' });
    }
  },
}));
