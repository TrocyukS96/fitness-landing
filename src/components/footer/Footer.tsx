"use client";
import { legalInfoItems, pagesData } from "@/utils/pages-data";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import CallIcon from "../icons/CallIcon";
import MailIcon from "../icons/MailIcon";
import styles from "./Footer.module.scss";
import { scrollToBlock } from "@/utils/scroll-to-block";

const Footer = () => {
  const router = useRouter();
  const path = usePathname();
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.logoCol}>
            <Link href="/" aria-label="Go to homepage">
              <Image
                src={"/logo_mobile_white.svg"}
                width={200}
                height={70}
                alt="PolovtsevFit Logo"
                priority
                className={styles.Logo_Img}
              />
            </Link>
            <div className={styles.footerContactLink}>
              <CallIcon className={styles.footerLinkIcon} />
              <div className={styles.footerContactLinkItem}>
                <div className={styles.footerLinkText}>Call me</div>
                <a href="tel:+375298501033" className={styles.footerLinkItem}>
                  +375 (29) 850-10-33
                </a>
              </div>
            </div>
            <div className={styles.footerContactLink}>
              <MailIcon className={styles.footerLinkIcon} />
              <div className={styles.footerContactLinkItem}>
                <div className={styles.footerLinkText}>Write to me</div>
                <a
                  href="mailto:kirill.v.polovtsev@gmail.com"
                  className={styles.footerLinkItem}
                >
                  kirill.v.polovtsev@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className={styles.pagesCol}>
            <h2 className={styles.footerTitle}>Pages</h2>
            <ul className={styles.footerLinks}>
              {pagesData.map((item) => (
                <li className={styles.footerLinkItem} key={item.path}>
                  <button
                    className={styles.footerLinkBtn}
                    onClick={() => {
                      if (path === "/") {
                        scrollToBlock(item.type);
                      } else {
                        router.push(`/#${item.type}`);
                      }
                    }}
                  >
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className={`${styles.pagesCol} ${styles.legalInfoCol}`}>
            <h2 className={styles.footerTitle}>Legal information</h2>
            <ul className={styles.footerLinks}>
              {legalInfoItems.map((item) => (
                <li
                  key={item.title}
                  className={styles.footerLinkItem}
                  onClick={() => router.push(item.path)}
                >
                  {item.title}
                </li>
              ))}
            </ul>
            <div className={styles.bankLogos}>
              <Image
                width={80}
                height={30}
                src={"/visa-logo.png"}
                alt="visa logo"
              />
              <Image
                width={80}
                height={30}
                src={"/visa-secure.png"}
                alt="visa secure logo"
              />
              <Image
                width={80}
                height={30}
                src={"/mastercard.png"}
                alt="mastercard logo"
              />
              <Image
                width={80}
                height={30}
                src={"/id-check.png"}
                alt="mastercard id check logo"
              />
              <Image
                width={80}
                height={30}
                src={"/apple-pay.png"}
                alt="apple-pay logo"
              />
              <Image
                width={80}
                height={30}
                src={"/samsung-pay.png"}
                alt="samsung-pay logo"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
