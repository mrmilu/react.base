import LoaderStyled from "@/src/ui/components/loader/loader.styled";
import Styled from "@/src/ui/components/main_loader/main_loader.styled";
import { easings, useTransition } from "@react-spring/web";
import { useUiProvider } from "@/src/ui/providers/ui.provider";

export const MainLoader = () => {
  const showLoader = useUiProvider((state) => state.showLoader);
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
        <Styled.Wrapper style={styles}>
          <LoaderStyled />
        </Styled.Wrapper>
      )
  );
};
