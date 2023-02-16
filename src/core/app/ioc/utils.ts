/* eslint-disable @typescript-eslint/no-explicit-any */
import { locator } from "@/src/core/app/ioc/index";

export const bindDynamicModule = <P, T>(identifier: symbol, dynamicImport: () => Promise<any>) => {
  locator.bind<P>(identifier).toProvider<T>((context) => {
    return async () => {
      const module = identifier.description;
      const resolvedModule = await dynamicImport();
      const dependency = Object.values(resolvedModule)[0] as new (...args: never[]) => any;
      const resolvedIdentifier = `${module}_resolved`;

      if (!context.container.isBound(resolvedIdentifier)) {
        context.container.bind<T>(resolvedIdentifier).to(dependency);
      }

      return context.container.get<T>(resolvedIdentifier);
    };
  });
};

export const bindSingletonDynamicModule = <P, T>(identifier: symbol, dynamicImport: () => Promise<any>) => {
  locator.bind<P>(identifier).toProvider<T>((context) => {
    return async () => {
      const module = identifier.description;
      const resolvedModule = await dynamicImport();
      const dependency = Object.values(resolvedModule)[0] as new (...args: never[]) => any;
      const resolvedIdentifier = `${module}_resolved`;

      if (!context.container.isBound(resolvedIdentifier)) {
        context.container.bind<T>(resolvedIdentifier).to(dependency).inSingletonScope();
      }

      return context.container.get<T>(resolvedIdentifier);
    };
  });
};
