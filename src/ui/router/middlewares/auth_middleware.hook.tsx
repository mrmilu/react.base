import type { MiddlewareHook } from "@/src/ui/router/route_middleware";
import { useSelector } from "react-redux";
import { getLoggedState } from "@/src/ui/state/user.slice";
import { useEffect } from "react";
import { showModal } from "@/src/ui/state/ui.slice";
import { LoggingModal } from "@/src/ui/pages/dummy/components/loggin_modal/loggin_modal";
import { useAppDispatch } from "@/src/ui/state";

export const useAuthMiddleware: MiddlewareHook = () => {
  const dispatch = useAppDispatch();
  const isLogged = useSelector(getLoggedState);

  useEffect(() => {
    if (!isLogged) dispatch(showModal(<LoggingModal />));
  }, [dispatch, isLogged]);

  return {
    redirectUrl: isLogged ? undefined : "/"
  };
};
