import { Loader } from "@/src/shared/presentation/components/loader/loader";
import { useUiProvider } from "@/src/shared/presentation/providers/ui.provider";
import { animated, easings, useTransition } from "@react-spring/web";
import css from "./main-loader.css";

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
        <animated.div style={styles} className={css.wrapper}>
          <Loader />
        </animated.div>
      )
  );
};
