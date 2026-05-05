import { create } from 'zustand';

interface AuthState {
  user: any | null;
  activeEntityId: string | null;
  tokenExpiry: number | null;
  setUser: (user: any) => void;
  setActiveEntityId: (id: string | null) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set: any) => ({
  user: null,
  activeEntityId: null,
  tokenExpiry: null,
  setUser: (user: any) => set({ user }),
  setActiveEntityId: (id: string | null) => set({ activeEntityId: id }),
  logout: () => set({ user: null, activeEntityId: null, tokenExpiry: null }),
}));
