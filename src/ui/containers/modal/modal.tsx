import type { PropsWithChildren, ReactElement } from "react";
import { cloneElement, forwardRef, useEffect, useRef, useState } from "react";
import Styled from "@/src/ui/containers/modal/modal.styled";
import { useTransition, animated, easings } from "@react-spring/web";
import { ReactComponent as CloseIcon } from "@/src/ui/assets/icons/close.svg";
import { useUiProvider } from "@/src/ui/providers/ui.provider";
import { useClickOutside } from "@front_web_mrmilu/hooks";

const MODAL_TRANSITION_CONFIG = {
  duration: 450,
  easing: easings.easeOutQuart
};

export const Modal = () => {
  const modalShowing = useUiProvider((state) => state.modal.show);
  const modalContent = useUiProvider((state) => state.modal.content);
  const hideModal = useUiProvider((state) => state.hideModal);

  const [showContent, setShowContent] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const modalContentRef = useRef<HTMLDivElement>(null);

  const showModalTransition = useTransition(modalShowing, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    reverse: modalShowing,
    config: MODAL_TRANSITION_CONFIG
  });

  const showContentTransition = useTransition(showContent, {
    from: { opacity: 0, transform: "translate(0px, 300px)" },
    enter: { opacity: 1, transform: "translate(0px,0px)" },
    leave: { opacity: 0, transform: "translate(0px, 300px)" },
    reverse: showContent,
    config: MODAL_TRANSITION_CONFIG
  });

  useEffect(() => {
    if (modalShowing) {
      setTimeout(() => {
        setShowContent(true);
      }, 80);
    } else {
      setShowContent(false);
    }
  }, [modalShowing]);

  useClickOutside(modalContentRef, () => hideModal());

  const escapeKeyUpListener = (e: KeyboardEvent) => {
    if (modalShowing && (e.key === "Escape" || e.keyCode === 27)) {
      hideModal();
    }
  };

  useEffect(() => {
    document.addEventListener("keyup", escapeKeyUpListener);

    return () => {
      document.removeEventListener("keyup", escapeKeyUpListener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalShowing]);

  return showModalTransition(
    (styles, item) =>
      item && (
        <Styled.Wrapper ref={modalRef} style={styles}>
          {showContentTransition(
            (styles, item) =>
              item && (
                <animated.div style={styles}>{modalContent && cloneElement(modalContent as ReactElement, { ref: modalContentRef })}</animated.div>
              )
          )}
        </Styled.Wrapper>
      )
  );
};

export const ModalContent = forwardRef<HTMLDivElement, PropsWithChildren<{ className?: string }>>(({ children, className }, ref) => {
  const hideModal = useUiProvider((state) => state.hideModal);

  return (
    <Styled.Content ref={ref} className={className}>
      <Styled.CloseBtn icon={<CloseIcon />} onClick={() => hideModal()} />
      {children}
    </Styled.Content>
  );
});
