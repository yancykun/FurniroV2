import { create } from "zustand";

type CarouselState = {
  currentImage: number;
  nextButton: (inspirationLength: number) => void;
};

export const useCarouselStore = create<CarouselState>((set) => ({
  currentImage: 0,
  nextButton: (inspirationLength) =>
    set((state) => ({
      currentImage:
        state.currentImage === inspirationLength - 1
          ? 0
          : state.currentImage + 1,
    })),
}));
