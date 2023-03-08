import { createProvider } from "@/src/common/utils/zustand";
import type { HomeStateViewModel } from "@/src/ui/features/home/views/home_page/view_models/home_state";

interface HomeProviderBuilderProps {
  amount: "none" | "twenty" | "thirty";
}

export const useHomeProvider = createProvider<HomeStateViewModel, HomeProviderBuilderProps>(
  (set) => ({
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
  }),
  ({ amount }) => {
    switch (amount) {
      case "twenty":
        return {
          counter: 20
        };
      case "thirty":
        return { counter: 30 };
      case "none":
        return { counter: 0 };
    }
  }
);
