import type { StateCreator, StoreMutatorIdentifier } from "zustand";
import { createStore, useStore } from "zustand";
import type { PropsWithChildren } from "react";
import { createContext, useContext, useRef } from "react";
import { immer } from "zustand/middleware/immer";
import type { ConstructorType } from "@/src/common/interfaces/constructor_type";

interface StateProviderProps<T extends object, P> {
  initialState?: ConstructorType<T>;
  builderProps?: P;
}

type Merge = <T extends object, Mps extends [StoreMutatorIdentifier, unknown][] = [], Mcs extends [StoreMutatorIdentifier, unknown][] = []>(
  initialState: T,
  additionalStateCreator: StateCreator<T, Mps, Mcs>
) => StateCreator<T, Mps, Mcs>;

export const merge: Merge =
  (initialState, create) =>
  (...a) =>
    // eslint-disable-next-line
    Object.assign((create as any)(...a), initialState);

type BuilderMiddleware = <T, P, Mps extends [StoreMutatorIdentifier, unknown][] = [], Mcs extends [StoreMutatorIdentifier, unknown][] = []>(
  props: P,
  builder: (props: P) => StateCreator<T, Mps, Mcs>
) => StateCreator<T, Mps, Mcs>;

const builderMiddleware: BuilderMiddleware = (props, builder) => {
  return builder(props);
};

interface FactoryInitializerParams<T, P> {
  initialState?: T;
  builderProps?: P;
}

/**
 * Returns a hook that lets you access Zustand state within a Provider.
 * The state auto disposes when the Provider unmounts. This way, the memory is freed by the garbage collector.
 */
export function createProvider<T extends object, P extends object = never>(
  builderInitializer: (props: P) => StateCreator<T, [["zustand/immer", never]]>
) {
  const factoryInitializer = ({ initialState, builderProps }: FactoryInitializerParams<T, P>) => {
    if (initialState && builderProps) throw new Error("Both initialState and builderProps can't be used at the same time");
    const base = builderMiddleware(builderProps || ({} as P), builderInitializer);
    if (initialState) {
      return immer(merge(initialState, base));
    } else {
      return immer(base);
    }
  };
  const storeFactory = ({ initialState, builderProps }: FactoryInitializerParams<T, P>) =>
    createStore<T>()(
      factoryInitializer({
        initialState,
        builderProps
      })
    );
  type StoreType = ReturnType<typeof storeFactory>;
  const Context = createContext<StoreType | null>(null);

  const State = ({ children, initialState, builderProps }: PropsWithChildren<StateProviderProps<T, P>>) => {
    const _initialState = initialState as T | undefined;
    const store = useRef(storeFactory({ initialState: _initialState, builderProps })).current;
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
