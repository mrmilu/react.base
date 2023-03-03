import { createProvider } from "@/src/common/utils/zustand";
import type { HomeStateViewModel } from "@/src/ui/features/home/views/home_page/view_models/home_state";

export const useHomeProvider = createProvider<HomeStateViewModel>((set) => ({
  counter: 0,
  add() {
    set((state) => {
      state.counter++;
    });
  },
  subtract() {
    set((state) => {
      state.counter--;
    });
  }
}));
