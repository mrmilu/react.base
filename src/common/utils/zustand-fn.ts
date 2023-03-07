import type { StateCreator } from "zustand";
import { createStore, useStore, State } from "zustand";
import type { StoreMutatorIdentifier } from "zustand/vanilla";
import type { PropsWithChildren } from "react";
import { createContext, useContext, useRef } from "react";
import { immer } from "zustand/middleware/immer";

/**
 * Returns a hook that lets you access Zustand state within a Provider.
 * The state auto disposes when the Provider unmounts. This way, the memory is freed by the garbage collector.
 */

type FnMiddleware = <
  T extends State,
  Mps extends [StoreMutatorIdentifier, unknown][] = [],
  Mcs extends [StoreMutatorIdentifier, unknown][] = [],
  P = any
>(
  props: P,
  f: (props: P) => StateCreator<T, Mps, Mcs>,
) => StateCreator<T, Mps, Mcs>

const fnMiddleware : FnMiddleware = (props, f) => {
  return f(props);
}

export function createProviderFn<T, P>(
  initializer: (props: P) => StateCreator<T, [["zustand/immer", never]]>
) {
  const storeFactory = (props: P) => {
    return createStore<T>()(immer(fnMiddleware(props, initializer)));
  };
  type StoreType = ReturnType<typeof storeFactory>;
  const Context = createContext<StoreType | null>(null);

  const State = ({ children, ...props }: PropsWithChildren<P>) => {
    const store = useRef(storeFactory(props as P)).current;
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
