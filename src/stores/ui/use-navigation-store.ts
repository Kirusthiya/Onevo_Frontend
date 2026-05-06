import { create } from 'zustand';

interface NavigationState {
  activeMainItem: string;
  activeSubItem: string;
  isSubSidebarVisible: boolean;
  setActiveMainItem: (item: string) => void;
  setActiveSubItem: (item: string) => void;
}

export const useNavigationStore = create<NavigationState>((set) => ({
  activeMainItem: 'home',
  activeSubItem: '',
  isSubSidebarVisible: false,
  setActiveMainItem: (item) => {
    const hideSub = ['home', 'chat', 'inbox'].includes(item.toLowerCase());
    set({ 
      activeMainItem: item.toLowerCase(),
      isSubSidebarVisible: !hideSub,
      activeSubItem: '' // Reset sub item on main change
    });
  },
  setActiveSubItem: (item) => set({ activeSubItem: item }),
}));
