import type { EffectCallback } from "react";
import { useEffect, useRef } from "react";

export const useEffectOnce = (effect: EffectCallback) => {
  const runEffectOnce = useRef(false);
  const runCleanupOnce = useRef(false);
  const cleanupDestructor = useRef<ReturnType<EffectCallback> | null>(null);

  useEffect(() => {
    if (!runEffectOnce.current) {
      runEffectOnce.current = true;
      const destructor = effect();
      if (destructor) cleanupDestructor.current = destructor;
    }

    return () => {
      if (runCleanupOnce.current && cleanupDestructor.current) {
        cleanupDestructor.current();
      }
      runCleanupOnce.current = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
