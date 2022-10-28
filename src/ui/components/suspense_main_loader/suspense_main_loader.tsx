import LoaderStyled from "@/src/ui/components/loader/loader.styled";
import type { PropsWithChildren } from "react";
import { Suspense } from "react";
import { SuspenseMainLoaderStyled } from "@/src/ui/components/suspense_main_loader/supense_main_loader.styled";

const MainLoader = () => (
  <SuspenseMainLoaderStyled>
    <LoaderStyled />
  </SuspenseMainLoaderStyled>
);

export const SuspenseMainLoader = ({ children }: PropsWithChildren<unknown>) => {
  return <Suspense fallback={<MainLoader />}>{children}</Suspense>;
};
