import { getLoaderState } from "@/src/ui/state/ui.slice";
import { useAppSelector } from "@/src/ui/state";
import { LoaderStyled } from "@/src/ui/components/loader/loader.styled";
import { MainLoaderStyled } from "@/src/ui/components/main_loader/main_loader.styled";

export const MainLoader = () => {
  const showLoader = useAppSelector(getLoaderState);

  return showLoader ? (
    <MainLoaderStyled>
      <LoaderStyled />
    </MainLoaderStyled>
  ) : (
    <></>
  );
};
