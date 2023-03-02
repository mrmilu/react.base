import type { StateCreator } from "zustand";
import { createStore, useStore } from "zustand";
import type { StoreMutatorIdentifier } from "zustand/vanilla";
import type { PropsWithChildren } from "react";
import { createContext, useContext, useRef } from "react";
import { immer } from "zustand/middleware/immer";

/**
 * Returns a hook that lets you access Zustand state within a Provider.
 * The state auto disposes when the Provider unmounts. This way, the memory is freed by the garbage collector.
 */
export function createProvider<T, Mos extends [StoreMutatorIdentifier, unknown][] = []>(
  initializer: StateCreator<T, [["zustand/immer", never]], Mos>
) {
  const storeFactory = () => createStore<T>()(immer(initializer));
  type StoreType = ReturnType<typeof storeFactory>;
  const Context = createContext<StoreType | null>(null);

  const State = ({ children }: PropsWithChildren) => {
    const store = useRef(storeFactory()).current;
    return <Context.Provider value={store}>{children}</Context.Provider>;
  };

  type UseStoreWithProvider = {
    <U>(selector: (state: T) => U, equalityFn?: ((a: U, b: U) => boolean) | undefined): U;
    State: typeof State;
  };

  const useStoreWithProvider: UseStoreWithProvider = function <U>(selector: (state: T) => U, equalityFn?: ((a: U, b: U) => boolean) | undefined) {
    const store = useContext(Context);
    if (!store) throw new Error("Provider is out of scope");
    return useStore<StoreType, U>(store, selector, equalityFn);
  };
  useStoreWithProvider.State = State;

  return useStoreWithProvider;
}
