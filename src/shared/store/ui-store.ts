import { create } from "zustand";

interface UIState {
  isSidebarOpen: boolean;
  isSearchOpen: boolean;
  theme: "light" | "dark" | "system";
  setSidebarOpen: (isOpen: boolean) => void;
  setSearchOpen: (isOpen: boolean) => void;
  setTheme: (theme: "light" | "dark" | "system") => void;
  toggleSidebar: () => void;
}

export const useUIStore = create<UIState>()((set) => ({
  isSidebarOpen: false,
  isSearchOpen: false,
  theme: "system",
  setSidebarOpen: (isOpen) => set({ isSidebarOpen: isOpen }),
  setSearchOpen: (isOpen) => set({ isSearchOpen: isOpen }),
  setTheme: (theme) => set({ theme }),
  toggleSidebar: () =>
    set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
}));
