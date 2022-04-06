import { Navigate, useLocation } from "react-router-dom";

export interface ValidationHookOutput {
  redirectUrl?: string;
  replace?: boolean;
}

export type MiddlewareHook = () => ValidationHookOutput;

interface Props {
  validationHook: () => ValidationHookOutput;
  children: JSX.Element;
}

export const RouteMiddleware = ({ children, validationHook }: Props) => {
  const location = useLocation();
  const { redirectUrl, replace = true } = validationHook();

  if (redirectUrl) {
    return <Navigate to={redirectUrl} state={{ from: location }} replace={replace} />;
  }

  return children;
};
