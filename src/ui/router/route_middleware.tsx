import { Await, Navigate, useLocation, defer } from "react-router-dom";
import { SuspenseMainLoader } from "@/src/ui/components/suspense_main_loader/suspense_main_loader";

export interface TrackedPromise<T> extends Promise<T> {
  _tracked?: boolean;
  _data?: T;
  _error?: T;
}

export interface ValidationHookOutput {
  errorRedirectUrl?: string;
  successRedirectUrl?: string;
  promise: Promise<unknown>;
  replace?: boolean;
  skipMiddleware?: boolean;
}

export type MiddlewareHook = () => ValidationHookOutput;

interface Props {
  validationHook: () => ValidationHookOutput;
  children: JSX.Element;
}

// IMPORTANT!! Tracked promise must return a value always it can't be null or undefined.
export const trackPromise = <T,>(promise: Promise<T>): TrackedPromise<T> => defer({ promise }).data.promise as TrackedPromise<T>;

export const RouteMiddleware = ({ children, validationHook }: Props) => {
  const { errorRedirectUrl, replace = true, successRedirectUrl, promise, skipMiddleware } = validationHook();
  const location = useLocation();

  if (location.state?.skipMiddleware || skipMiddleware) {
    window.history.replaceState({}, document.title);
    return children;
  }

  const NavigateRedirect = (props: { redirectUrl: string }) => {
    return (
      <Navigate
        to={props.redirectUrl}
        state={{
          from: location,
          skipMiddleware: true
        }}
        replace={replace}
      />
    );
  };
  return (
    <SuspenseMainLoader>
      <Await resolve={trackPromise(promise)} errorElement={errorRedirectUrl ? <NavigateRedirect redirectUrl={errorRedirectUrl} /> : children}>
        {() => {
          if (successRedirectUrl) {
            return <NavigateRedirect redirectUrl={successRedirectUrl} />;
          }
          return children;
        }}
      </Await>
    </SuspenseMainLoader>
  );
};
