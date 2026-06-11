"use client";
import { SectionTypes } from "@/types";
import { pagesData } from "@/utils/pages-data";
import { scrollToBlock } from "@/utils/scroll-to-block";
import { usePathname, useRouter } from "next/navigation";
import stc from "../styles/app/components.module.scss";
import st from "../styles/components/Header.module.scss";
import Logo from "./logo/Logo";

export interface HeaderProps {
  onMenuClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {

  return (
    <header className={stc.Wrapper}>
      <nav className={st.Container}>
        <Logo />
        <ul className={st.Links}>
          {pagesData.slice(1, pagesData.length).map((item) => (
            <HeaderItem key={item.path} name={item.title} type={item.type} />
          ))}
        </ul>
        <div className={st.mobileBtnWrapper}>
          <div
            className={st.burgerWrapper}
            aria-label="Open site menu"
            onClick={onMenuClick}
          >
            <svg
              aria-hidden="true"
              focusable="false"
              width="27"
              height="18"
              viewBox="0 0 27 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.819147 17.2168C0.373756 17.2168 0.0126953 16.8557 0.0126953 16.4103C0.0126953 15.965 0.373756 15.6039 0.819147 15.6039H25.2062C25.6516 15.6039 26.0127 15.965 26.0127 16.4103C26.0127 16.8557 25.6516 17.2168 25.2062 17.2168H0.819147ZM0.819147 9.52325C0.373756 9.52325 0.0126953 9.16219 0.0126953 8.7168C0.0126953 8.27141 0.373756 7.91034 0.819147 7.91034H25.2062C25.6516 7.91034 26.0127 8.27141 26.0127 8.7168C26.0127 9.16219 25.6516 9.52325 25.2062 9.52325H0.819147ZM0.819147 1.8297C0.373756 1.8297 0.0126953 1.46864 0.0126953 1.02325C0.0126953 0.577857 0.373756 0.216797 0.819147 0.216797H25.2062C25.6516 0.216797 26.0127 0.577857 26.0127 1.02325C26.0127 1.46864 25.6516 1.8297 25.2062 1.8297H0.819147Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

const HeaderItem = ({ name, type }: { name: string; type: SectionTypes }) => {
  const router = useRouter();
  const path = usePathname();
  return (
    <li className={st.Links_Item}>
      <button
        className={st.Links_Item_Content}
        onClick={() => {
          if (path === "/") {
            scrollToBlock(type);
          } else {
            router.push(`/#${type}`);
          }
        }}
      >
        {name}
      </button>
    </li>
  );
};
