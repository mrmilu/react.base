import { LoggingModal } from "@/src/ui/components/logging-modal/logging-modal";
import { useUiProvider } from "@/src/ui/providers/ui.provider";
import { useUserProvider } from "@/src/ui/providers/user.provider";
import type { MiddlewareHook } from "@/src/ui/router/route-middleware";
import { useEffect } from "react";

export const useAuthMiddleware: MiddlewareHook = () => {
  const showModal = useUiProvider((state) => state.showModal);
  const isLogged = useUserProvider((state) => state.logged);

  useEffect(() => {
    if (!isLogged) showModal(<LoggingModal />);
  }, [isLogged, showModal]);

  const fakePromise = async () => {
    if (isLogged) {
      return "Logged";
    } else {
      throw "Not logged";
    }
  };

  return {
    errorRedirectUrl: "/",
    promise: fakePromise()
  };
};
