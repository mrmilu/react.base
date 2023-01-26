import type { MiddlewareHook } from "@/src/ui/router/route_middleware";
import { useEffect } from "react";
import { useUiProvider } from "@/src/ui/providers/ui.provider";
import { LoggingModal } from "@/src/ui/pages/misc/components/logging_modal/logging_modal";
import { useUserProvider } from "@/src/ui/providers/user.provider";

export const useAuthMiddleware: MiddlewareHook = () => {
  const showModal = useUiProvider((state) => state.showModal);
  const isLogged = useUserProvider((state) => state.logged);

  useEffect(() => {
    if (!isLogged) showModal(<LoggingModal />);
  }, [isLogged, showModal]);

  return {
    redirectUrl: isLogged ? undefined : "/"
  };
};
