import type { StateCreator } from "zustand";
import { createStore, useStore } from "zustand";
import type { StoreApi, StoreMutatorIdentifier } from "zustand/vanilla";
import type { PropsWithChildren } from "react";
import { createContext, useContext, useMemo } from "react";

/**
 * Returns a hook that lets you access Zustand state within a Provider.
 * The state autodisposes when the Provider unmounts. This way, the memory is freed by the gargage collector.
 */
export function zustandWithProvider<T, Mos extends [StoreMutatorIdentifier, unknown][] = []>(initializer: StateCreator<T, [], Mos>) {
  const storeFactory = () => createStore(initializer);
  type StoreType = StoreApi<T>;
  const Context = createContext<StoreType>(undefined as unknown as StoreType);

  const Provider = ({ children }: PropsWithChildren) => {
    const store = useMemo(() => storeFactory(), []);
    return <Context.Provider value={store}>{children}</Context.Provider>;
  };

  type UseStoreWithProvider = {
    <U>(selector: (state: T) => U, equalityFn?: ((a: U, b: U) => boolean) | undefined): U;
    Provider: typeof Provider;
  };
  const useStoreWithProvider: UseStoreWithProvider = function <U>(selector: (state: T) => U, equalityFn?: ((a: U, b: U) => boolean) | undefined) {
    const store = useContext(Context);
    if (!store) throw new Error("Provider is out of scope");
    return useStore<StoreType, U>(store, selector, equalityFn);
  };
  useStoreWithProvider.Provider = Provider;

  return useStoreWithProvider;
}
