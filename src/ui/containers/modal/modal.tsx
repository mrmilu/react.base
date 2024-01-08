import CloseIcon from "@/src/ui/assets/icons/close.svg?react";
import { IconButton } from "@/src/ui/components/icon_button/icon_button";
import { useUiProvider } from "@/src/ui/providers/ui.provider";
import { useClickOutside } from "@front_web_mrmilu/hooks";
import { animated, easings, useTransition } from "@react-spring/web";
import type { PropsWithChildren, ReactElement } from "react";
import { cloneElement, forwardRef, useEffect, useRef, useState } from "react";
import css from "./modal.css";

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
        <animated.div ref={modalRef} className={css.wrapper} style={styles}>
          {showContentTransition(
            (styles, item) =>
              item && (
                <animated.div style={styles}>{modalContent && cloneElement(modalContent as ReactElement, { ref: modalContentRef })}</animated.div>
              )
          )}
        </animated.div>
      )
  );
};

export const ModalContent = forwardRef<HTMLDivElement, PropsWithChildren<{ className?: string }>>(({ children, className }, ref) => {
  const hideModal = useUiProvider((state) => state.hideModal);

  return (
    <div ref={ref} className={`${css.modalContent} ${className ?? ""}`}>
      <IconButton className={css.closeBtn} icon={<CloseIcon />} onClick={() => hideModal()} />
      {children}
    </div>
  );
});
