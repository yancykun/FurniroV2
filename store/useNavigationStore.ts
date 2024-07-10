"use client";

import { create } from "zustand";

type NavigationState = {
  openNavigation: boolean;
  toggleNavigation: () => void;
  closeNavigation: () => void;
};

export const useNavigationStore = create<NavigationState>((set) => ({
  openNavigation: false,
  toggleNavigation: () =>
    set((state) => ({ openNavigation: !state.openNavigation })),
  closeNavigation: () => set({ openNavigation: false }),
}));
