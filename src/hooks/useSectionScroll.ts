import { useRef, useCallback } from "react";

export type SectionKey = "about" | "forWhom" | "tariffs" | "faq" | "contacts";

interface SectionScrollRefs {
  about: React.RefObject<HTMLElement | null>;
  forWhom: React.RefObject<HTMLElement | null>;
  tariffs: React.RefObject<HTMLElement | null>;
  faq: React.RefObject<HTMLElement | null>;
  contacts: React.RefObject<HTMLElement | null>;
}

interface SectionScrollHandlers {
  onAboutClick: () => void;
  onForWhomClick: () => void;
  onTariffsClick: () => void;
  onFAQClick: () => void;
  onContactsClick: () => void;
}

export interface UseSectionScrollResult {
  refs: SectionScrollRefs;
  handlers: SectionScrollHandlers;
}

export const useSectionScroll = (): UseSectionScrollResult => {
  const aboutRef = useRef<HTMLElement>(null);
  const forWhomRef = useRef<HTMLElement>(null);
  const tariffsRef = useRef<HTMLElement>(null);
  const faqRef = useRef<HTMLElement>(null);
  const contactsRef = useRef<HTMLElement>(null);

  const scrollToSection = useCallback(
    (ref: React.RefObject<HTMLElement | null>) => {
      const element = ref.current;
      if (!element || typeof window === "undefined") {
        return;
      }

      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      if (isMobile) {
        const elementRect = element.getBoundingClientRect();
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        const viewportHeight = window.innerHeight;
        const elementHeight = element.offsetHeight;

        let desiredScrollPosition =
          scrollTop + elementRect.top - viewportHeight / 2 + elementHeight / 2;

        const offset = 50;
        desiredScrollPosition = desiredScrollPosition - offset;

        window.scrollTo({
          top: desiredScrollPosition,
          behavior: "smooth",
        });
      } else {
        element.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    },
    []
  );

  const handlers: SectionScrollHandlers = {
    onAboutClick: () => scrollToSection(aboutRef),
    onForWhomClick: () => scrollToSection(forWhomRef),
    onTariffsClick: () => scrollToSection(tariffsRef),
    onFAQClick: () => scrollToSection(faqRef),
    onContactsClick: () => scrollToSection(contactsRef),
  };

  return {
    refs: {
      about: aboutRef,
      forWhom: forWhomRef,
      tariffs: tariffsRef,
      faq: faqRef,
      contacts: contactsRef,
    },
    handlers,
  };
};
