"use client";

import React, {
  useEffect,
  useState,
  CSSProperties,
  ReactNode,
  useCallback,
} from "react";
import { createPortal } from "react-dom";
import { keyframes, css } from "@emotion/react";
import styled from "@emotion/styled";
import CancelIcon from "../icons/CancelIcon";

interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
  children?: ReactNode;
  disableModalContent?: boolean;
  overlayColor?: string;
  overlayOpacity?: number;
  overlayBlur?: boolean;
  modalBackgroundColor?: string;
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  maxHeight?: CSSProperties["maxHeight"];
  borderRadius?: CSSProperties["borderRadius"];
  padding?: CSSProperties["padding"];
  flexDirection?: CSSProperties["flexDirection"];
  alignItems?: CSSProperties["alignItems"];
  justifyContent?: CSSProperties["justifyContent"];
  isCancelIcon?: boolean;
  className?: string;
  style?: CSSProperties;
  ContentID?: string;
  animationDuration?: string;
  maxWidth?: CSSProperties["maxWidth"];
  minWidth?: CSSProperties["minWidth"];
  minHeight?: CSSProperties["minHeight"];
}

/** Overlay fade-in animation */
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

/** Overlay fade-out animation */
const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

/** Modal content slide-in animation */
const slideIn = keyframes`
  from { transform: translateY(20px); }
  to { transform: translateY(0); }
`;

/** Modal content slide-out animation */
const slideOut = keyframes`
  from { transform: translateY(0); }
  to { transform: translateY(-20px); }
`;

// Global CSS class for scroll lock
const scrollLockStyles = `
  body.modal-open {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
`;

const Overlay = styled.div<{
  $isClosing: boolean;
  $overlayColor: string;
  $overlayOpacity: number;
  $overlayBlur: boolean;
  $animationDuration: string;
}>`
  position: fixed;
  inset: 0;
  background-color: ${({ $overlayColor }) => $overlayColor};
  opacity: ${({ $overlayOpacity }) => $overlayOpacity};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 0 10px;

  ${({ $overlayBlur }) => $overlayBlur && "backdrop-filter: blur(20px);"}

  animation: ${({ $isClosing, $animationDuration }) => css`
    ${$isClosing ? fadeOut : fadeIn} ${$animationDuration} ease forwards
  `};
`;

const ModalContainer = styled.div<{
  $isClosing: boolean;
  $modalBackgroundColor: string;
  $width?: CSSProperties["width"];
  $height?: CSSProperties["height"];
  $maxHeight?: CSSProperties["maxHeight"];
  $borderRadius?: CSSProperties["borderRadius"];
  $padding?: CSSProperties["padding"];
  $flexDirection?: CSSProperties["flexDirection"];
  $alignItems?: CSSProperties["alignItems"];
  $justifyContent?: CSSProperties["justifyContent"];
  $animationDuration: string;
  $cancelIcon: boolean;
  $maxWidth?: CSSProperties["maxWidth"];
  $minWidth?: CSSProperties["minWidth"];
  $minHeight?: CSSProperties["minHeight"];
}>`
  background-color: ${({ $modalBackgroundColor }) => $modalBackgroundColor};
  width: ${({ $width }) => $width || "auto"};
  height: ${({ $height }) => $height || "auto"};
  max-height: ${({ $maxHeight }) => $maxHeight || "100vh"};
  border-radius: 14px;
  padding: ${({ $padding }) => $padding || "24px"};
  max-width: ${({ $maxWidth }) => $maxWidth || "none"};
  min-width: ${({ $minWidth }) => $minWidth || "none"};
  min-height: ${({ $minHeight }) => $minHeight || "none"};

  position: relative;
  display: flex;
  flex-direction: ${({ $flexDirection }) => $flexDirection || "column"};
  align-items: ${({ $alignItems }) => $alignItems || "center"};
  justify-content: ${({ $justifyContent }) => $justifyContent || "center"};

  animation: ${({ $isClosing, $animationDuration }) => css`
    ${$isClosing ? slideOut : slideIn} ${$animationDuration} ease forwards
  `};
  transition: all ${({ $animationDuration }) => $animationDuration} ease;

  .modal-close-icon {
    position: absolute;
    top: 12px;
    right: 12px;
    width: 32px;
    height: 32px;
    color: currentColor;
    cursor: pointer;
    transition: color 0.2s ease;
    z-index: 1;

    &:hover {
      color: #ff0000;
    }
  }

  padding-top: ${({ $cancelIcon }) => ($cancelIcon ? "50px" : "24px")};

  @media (max-width: 768px) {
    width: 100% !important;
  }
`;

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  disableModalContent = false,
  isCancelIcon,
  overlayColor = "rgba(0, 0, 0, 0.7)",
  overlayOpacity = 1,
  overlayBlur = false,
  modalBackgroundColor = "#fff",
  width,
  height,
  maxHeight,
  borderRadius,
  padding,
  flexDirection,
  alignItems,
  justifyContent,
  className,
  style,
  ContentID,
  animationDuration = "0.3s",
}) => {
  const [mounted, setMounted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Add global styles for scroll lock
    const styleElement = document.createElement("style");
    styleElement.textContent = scrollLockStyles;
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  // Control scroll lock via CSS class
  useEffect(() => {
    if (showModal && !isClosing) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [showModal, isClosing]);

  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
      setIsClosing(false);
    } else if (showModal) {
      setIsClosing(true);
    }
  }, [isOpen, showModal]);

  const handleAnimationEnd = useCallback(() => {
    if (isClosing) {
      setShowModal(false);
      onClose?.();
    }
  }, [isClosing, onClose]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) {
      setIsClosing(true);
    }
  };

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsClosing(true);
      }
    }

    if (showModal) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [showModal]);

  if (!mounted || !showModal) {
    return null;
  }

  return createPortal(
    <Overlay
      $isClosing={isClosing}
      $overlayColor={overlayColor}
      $overlayOpacity={overlayOpacity}
      $overlayBlur={overlayBlur}
      $animationDuration={animationDuration}
      onClick={handleOverlayClick}
      onAnimationEnd={handleAnimationEnd}
    >
      {disableModalContent ? (
        children
      ) : (
        <ModalContainer
          id={ContentID}
          className={className}
          style={style}
          $isClosing={isClosing}
          $modalBackgroundColor={modalBackgroundColor}
          $width={width}
          $height={height}
          $maxHeight={maxHeight}
          $borderRadius={borderRadius}
          $padding={padding}
          $flexDirection={flexDirection}
          $alignItems={alignItems}
          $justifyContent={justifyContent}
          $animationDuration={animationDuration}
          $cancelIcon={!!isCancelIcon}
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
        >
          {isCancelIcon && (
            <CancelIcon
              className="modal-close-icon"
              onClick={() => setIsClosing(true)}
            />
          )}
          {children}
        </ModalContainer>
      )}
    </Overlay>,
    document.body
  );
};