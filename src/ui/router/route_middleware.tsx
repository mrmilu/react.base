import { Await, Navigate, useLocation } from "react-router-dom";
import type { TrackedPromise } from "@remix-run/router";
import { defer } from "react-router-dom";
import { SuspenseMainLoader } from "@/src/ui/components/suspense_main_loader/suspense_main_loader";
import * as React from "react";

export interface ValidationHookOutput {
  errorRedirectUrl?: string;
  successRedirectUrl?: string;
  promise: Promise<any>;
  replace?: boolean;
}

export type MiddlewareHook = () => ValidationHookOutput;

interface Props {
  validationHook: () => ValidationHookOutput;
  children: JSX.Element;
}

// IMPORTANT!! Tracked promise must return a value always it can't be null or undefined.
export const trackPromise = <T,>(promise: Promise<T>): TrackedPromise => defer({ promise }).data.promise as TrackedPromise;

export const RouteMiddleware = ({ children, validationHook }: Props) => {
  const location = useLocation();
  if (location.state?.skipMiddleware) {
    window.history.replaceState({}, document.title);
    return children;
  }
  const { errorRedirectUrl, replace = true, successRedirectUrl, promise } = validationHook();

  const NavigateRedirect = (props: { redirectUrl: string }) => (
    <Navigate
      to={props.redirectUrl}
      state={{
        from: location,
        skipMiddleware: true
      }}
      replace={replace}
    />
  );

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
