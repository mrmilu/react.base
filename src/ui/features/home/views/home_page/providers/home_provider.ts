import { createProvider } from "@/src/common/utils/zustand";
import type { HomeStateViewModel } from "@/src/ui/features/home/views/home_page/view_models/home_state";

interface HomeProviderBuilderProps {
  amount: "none" | "twenty" | "thirty";
}

export const useHomeProvider = createProvider<HomeStateViewModel, HomeProviderBuilderProps>(({ amount }) => {
  let counter = 0;
  switch (amount) {
    case "twenty":
      counter = 20;
      break;
    case "thirty":
      counter = 30;
      break;
  }

  return (set) => ({
    counter,
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
  });
});

export const useHomeProviderBis = createProvider<HomeStateViewModel>(() => (set) => ({
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
