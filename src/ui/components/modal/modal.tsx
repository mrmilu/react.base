import type { PropsWithChildren, ReactElement } from "react";
import { cloneElement, forwardRef, useEffect, useRef, useState } from "react";
import { ModalCloseBtn, ModalContentStyled, ModalStyled } from "@/src/ui/components/modal/modal.styled";
import { useTransition, animated, easings } from "react-spring";
import { Close as CloseIcon } from "@/src/ui/icons";
import { useAppDispatch, useAppSelector } from "@/src/ui/state";
import { getModalContent, getShowModal, hideModal } from "@/src/ui/state/ui.slice";
import { useClickOutside } from "@/src/ui/hooks/click_outisde.hook";

const MODAL_TRANSITION_CONFIG = {
  duration: 450,
  easing: easings.easeOutQuart
};

export const Modal = () => {
  const dispatch = useAppDispatch();
  const [showContent, setShowContent] = useState(false);
  const showModal = useAppSelector(getShowModal);
  const modalContent = useAppSelector(getModalContent);
  const modalRef = useRef<HTMLDivElement>(null);
  const modalContentRef = useRef<HTMLDivElement>(null);
  const showModalTransition = useTransition(showModal, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    reverse: showModal,
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
    if (showModal) {
      setTimeout(() => {
        setShowContent(true);
      }, 80);
    } else {
      setShowContent(false);
    }
  }, [showModal]);

  useClickOutside(modalContentRef, () => dispatch(hideModal()));

  const escapeKeyUpListener = (e: KeyboardEvent) => {
    if (showModal && (e.key === "Escape" || e.keyCode === 27)) {
      dispatch(hideModal());
    }
  };

  useEffect(() => {
    document.addEventListener("keyup", escapeKeyUpListener);

    return () => {
      document.removeEventListener("keyup", escapeKeyUpListener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showModal]);

  return showModalTransition(
    (styles, item) =>
      item && (
        <ModalStyled ref={modalRef} style={styles}>
          {showContentTransition(
            (styles, item) =>
              item && (
                <animated.div style={styles}>{modalContent && cloneElement(modalContent as ReactElement, { ref: modalContentRef })}</animated.div>
              )
          )}
        </ModalStyled>
      )
  );
};

// eslint-disable-next-line react/display-name
export const ModalContent = forwardRef<HTMLDivElement, PropsWithChildren<{ className?: string }>>(({ children, className }, ref) => {
  const dispatch = useAppDispatch();

  return (
    <ModalContentStyled ref={ref} className={className}>
      <ModalCloseBtn icon={<CloseIcon />} onClick={() => dispatch(hideModal())} />
      {children}
    </ModalContentStyled>
  );
});
