/* eslint-disable @typescript-eslint/no-explicit-any */
import { locator } from "@/src/core/app/ioc/index";

export const bindDynamicModule = <P, T>(identifier: symbol, dynamicImport: () => Promise<any>) => {
  locator.bind<P>(identifier).toProvider<T>((context) => {
    return async () => {
      const module = identifier.description;
      const resolvedModule = await dynamicImport();
      const repo = resolvedModule[module as string];

      const resolvedIdentifier = `${identifier.toString()}_resolved`;
      if (!context.container.isBound(resolvedIdentifier)) {
        context.container.bind<T>(resolvedIdentifier).to(repo);
      }
      return context.container.get<T>(resolvedIdentifier);
    };
  });
};

export const bindSingletonDynamicModule = <P, T>(identifier: symbol, toResolveModule: () => Promise<new (...args: never[]) => T>) => {
  locator.bind<P>(identifier).toProvider<T>((context) => {
    return async () => {
      const repo = await toResolveModule();

      const resolvedIdentifier = `${identifier.toString()}_resolved`;
      if (!context.container.isBound(resolvedIdentifier)) {
        context.container.bind<T>(resolvedIdentifier).to(repo).inSingletonScope();
      }
      return context.container.get<T>(resolvedIdentifier);
    };
  });
};
