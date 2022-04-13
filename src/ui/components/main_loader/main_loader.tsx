import { getLoaderState } from "@/src/ui/state/ui.slice";
import { useAppSelector } from "@/src/ui/state";
import { LoaderStyled } from "@/src/ui/components/loader/loader.styled";
import { MainLoaderStyled } from "@/src/ui/components/main_loader/main_loader.styled";
import { easings, useTransition } from "react-spring";

export const MainLoader = () => {
  const showLoader = useAppSelector(getLoaderState);
  const showModalTransition = useTransition(showLoader, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    reverse: showLoader,
    config: {
      duration: 450,
      easing: easings.easeOutQuart
    }
  });

  return showModalTransition(
    (styles, item) =>
      item && (
        <MainLoaderStyled style={styles}>
          <LoaderStyled />
        </MainLoaderStyled>
      )
  );
};
