import { LoggingModal } from "@/src/shared/presentation/components/logging-modal/logging-modal";
import { useUiProvider } from "@/src/shared/presentation/providers/ui.provider";
import { useUserProvider } from "@/src/shared/presentation/providers/user.provider";
import type { MiddlewareHook } from "@/src/shared/presentation/router/route-middleware";
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
