import type { PropsWithChildren } from "react";
import { Suspense } from "react";
import { MainLoader } from "../main_loader/main_loader";

export const SuspenseMainLoader = ({ children }: PropsWithChildren<unknown>) => {
  return <Suspense fallback={<MainLoader />}>{children}</Suspense>;
};
