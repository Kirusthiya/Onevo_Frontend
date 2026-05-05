import { create } from 'zustand';

interface LoadingState {
  isLoading: boolean;
  message: string | null;
  setLoading: (isLoading: boolean, message?: string | null) => void;
}

export const useLoadingStore = create<LoadingState>((set: any) => ({
  isLoading: false,
  message: null,
  setLoading: (isLoading: boolean, message: string | null = null) => set({ isLoading, message }),
}));
