import { create } from "zustand";

type SuccessDialogState = {
  successDialog: boolean;
  setSuccessDialog: () => void;
  clearSuccessDialog: () => void;
};

export const useSuccessDialogStore = create<SuccessDialogState>((set) => ({
  successDialog: false,
  setSuccessDialog: () => set({ successDialog: true }),
  clearSuccessDialog: () => set({ successDialog: false }),
}));
