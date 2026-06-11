"use client";

import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import cn from "classnames";
import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";

import stc from "@/styles/app/components.module.scss";
import st from "@/styles/components/MobileMenu.module.scss";
import { pagesData } from "@/utils/pages-data";
import { scrollToBlock } from "@/utils/scroll-to-block";

const slideDown = keyframes`
  from { transform: translateY(-100%); }
  to { transform: translateY(0); }
`;

const slideUp = keyframes`
  from { transform: translateY(0); }
  to { transform: translateY(-100%); }
`;

const slideFromRight = keyframes`
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const Container = styled.div<{ isClosing: boolean }>`
  animation: ${({ isClosing }) => (isClosing ? slideUp : slideDown)} 0.35s ease
    forwards;
`;

const Content = styled.div`
  animation: ${slideFromRight} 0.7s ease forwards;
`;

const Overlay = styled.div<{ isClosing: boolean }>`
  position: fixed;
  inset: 0;
  background-color: rgba(91, 93, 93, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9990;
  animation: ${({ isClosing }) => (isClosing ? fadeOut : fadeIn)} 0.2s ease
    forwards;
`;

interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  isClosing?: boolean;
}

const CLOSE_ANIMATION_DURATION = 200;

const CustomModal: React.FC<CustomModalProps> = ({
  isOpen,
  onClose,
  children,
  isClosing = false,
}) => {
  const [display, setDisplay] = useState(isOpen);

  const handleOverlayClick = useCallback(() => onClose(), [onClose]);

  useEffect(() => {
    if (isOpen) {
      setDisplay(true);
      document.body.style.overflow = "hidden";
    } else {
      const timer = setTimeout(() => {
        setDisplay(false);
        document.body.style.overflow = "";
      }, CLOSE_ANIMATION_DURATION);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!display) return null;

  return createPortal(
    <Overlay onClick={handleOverlayClick} isClosing={isClosing}>
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </Overlay>,
    document.body
  );
};

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onAboutClick?: () => void;
  onForWhomClick?: () => void;
  onTariffsClick?: () => void;
  onFAQClick?: () => void;
  onContactsClick?: () => void;
  onLoginClick?: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
}) => {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsClosing(false);
    }
  }, [isOpen]);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, CLOSE_ANIMATION_DURATION);
  }, [onClose]);

  const handleLinkClick = useCallback(
    (callback?: () => void) => {
      handleClose();
      if (callback) {
        setTimeout(() => {
          callback();
        }, CLOSE_ANIMATION_DURATION);
      }
    },
    [handleClose]
  );

  return (
    <CustomModal isOpen={isOpen} onClose={handleClose} isClosing={isClosing}>
      <Container isClosing={isClosing} className={st.Container}>
        <button
          type="button"
          aria-label="Close menu"
          className={st.CloseButton}
          onClick={handleClose}
          data-close-button
        >
          <i>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.9996 21.1796L11.2562 29.9229C11.1007 30.0785 10.9096 30.1618 10.6829 30.1729C10.4562 30.184 10.254 30.1007 10.0762 29.9229C9.89846 29.7451 9.80957 29.5485 9.80957 29.3329C9.80957 29.1173 9.89846 28.9207 10.0762 28.7429L18.8196 19.9996L10.0762 11.2562C9.92068 11.1007 9.83735 10.9096 9.82624 10.6829C9.81513 10.4562 9.89846 10.254 10.0762 10.0762C10.254 9.89846 10.4507 9.80957 10.6662 9.80957C10.8818 9.80957 11.0785 9.89846 11.2562 10.0762L19.9996 18.8196L28.7429 10.0762C28.8985 9.92068 29.0901 9.83735 29.3179 9.82624C29.5435 9.81513 29.7451 9.89846 29.9229 10.0762C30.1007 10.254 30.1896 10.4507 30.1896 10.6662C30.1896 10.8818 30.1007 11.0785 29.9229 11.2562L21.1796 19.9996L29.9229 28.7429C30.0785 28.8985 30.1618 29.0901 30.1729 29.3179C30.184 29.5435 30.1007 29.7451 29.9229 29.9229C29.7451 30.1007 29.5485 30.1896 29.3329 30.1896C29.1173 30.1896 28.9207 30.1007 28.7429 29.9229L19.9996 21.1796Z"
                fill="#55642B"
              />
            </svg>
          </i>
        </button>

        <Content className={cn(st.Content, stc.SectionColumn)}>
          <ul className={stc.SectionColumn}>
            {pagesData.map((item) => (
              <MobileMenuListItem
                key={item.path}
                name={item.title}
                type={item.type}
                handleLinkClick={handleLinkClick}
              />
            ))}
          </ul>

          <div className={st.ButtonContainer}>
          </div>

          <div className={stc.SocialLinks_Content}>
            <Link
              href="https://t.me/polovtsevfit"
              target="_blank"
              className={stc.SocialLinks_Item}
              aria-label="Telegram"
            >
              <Image
                src="/telegram_icon.svg"
                width={64}
                height={64}
                alt="Telegram"
              />
            </Link>
            <Link
              href="https://www.instagram.com/polovtsevfit"
              target="_blank"
              className={stc.SocialLinks_Item}
              aria-label="Instagram"
            >
              <Image
                src="/instagram_icon.svg"
                width={64}
                height={64}
                alt="Instagram"
              />
            </Link>
            <Link
              href="https://wa.me/79938830502"
              target="_blank"
              className={stc.SocialLinks_Item}
              aria-label="WhatsApp"
            >
              <Image
                src="/whatsapp_icon.svg"
                width={64}
                height={64}
                alt="WhatsApp"
              />
            </Link>
          </div>
        </Content>
      </Container>
    </CustomModal>
  );
};

const MobileMenuListItem = ({
  type,
  name,
  handleLinkClick,
}: {
  type: string;
  name: string;
  handleLinkClick: (fn: () => void) => void;
}) => {
  const handleScrollClick = () => {
    scrollToBlock(type);
  };
  return (
    <li className={st.Links_Item}>
      <button
        type="button"
        className={stc.Section_Subtitle}
        onClick={() => handleLinkClick(handleScrollClick)}
      >
        {name}
      </button>
    </li>
  );
};
