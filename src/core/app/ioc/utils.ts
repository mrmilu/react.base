/* eslint-disable @typescript-eslint/no-explicit-any */
import { interfaces } from "inversify";
import { locator } from "@/src/core/app/ioc/index";
import ProviderCreator = interfaces.ProviderCreator;

function binder<P, T>(
  bind: (<T>(serviceIdentifier: interfaces.ServiceIdentifier<T>) => interfaces.BindingToSyntax<T>) | undefined,
  identifier: symbol,
  providerCreator: (context: interfaces.Context) => interfaces.Provider<T>
) {
  if (bind) {
    bind<P>(identifier).toProvider<T>(providerCreator);
  } else {
    locator.bind<P>(identifier).toProvider<T>(providerCreator);
  }
}

export const bindDynamicModule = <P, T>(identifier: symbol, dynamicImport: () => Promise<any>, bind?: interfaces.Bind) => {
  const providerCreator: ProviderCreator<T> = (context) => {
    return async () => {
      const module = identifier.description;
      const resolvedModule = await dynamicImport();
      const dependency = Object.values(resolvedModule)[0] as new (...args: Array<never>) => any;
      const resolvedIdentifier = `${module}_resolved`;

      if (!context.container.isBound(resolvedIdentifier)) {
        context.container.bind<T>(resolvedIdentifier).to(dependency);
      }

      return context.container.get<T>(resolvedIdentifier);
    };
  };
  binder<P, T>(bind, identifier, providerCreator);
};

export const bindSingletonDynamicModule = <P, T>(identifier: symbol, dynamicImport: () => Promise<any>, bind?: interfaces.Bind) => {
  const providerCreator: ProviderCreator<T> = (context) => {
    return async () => {
      const module = identifier.description;
      const resolvedModule = await dynamicImport();
      const dependency = Object.values(resolvedModule)[0] as new (...args: Array<never>) => any;
      const resolvedIdentifier = `${module}_resolved`;

      if (!context.container.isBound(resolvedIdentifier)) {
        context.container.bind<T>(resolvedIdentifier).to(dependency).inSingletonScope();
      }

      return context.container.get<T>(resolvedIdentifier);
    };
  };
  binder<P, T>(bind, identifier, providerCreator);
};
