import { create } from "zustand";

type LoginDialogState = {
  loginDialog: boolean;
  setLoginDialog: () => void;
  clearLoginDialog: () => void;
};

export const useLoginDialogStore = create<LoginDialogState>((set) => ({
  loginDialog: false,
  setLoginDialog: () => set({ loginDialog: true }),
  clearLoginDialog: () => set({ loginDialog: false }),
}));
