"use client"
import { SectionTypes } from "@/types";
import cn from "classnames";
import Image from "next/image";
import Link from "next/link";
import stc from "../../../styles/app/components.module.scss";

export const SocialSection = () => {
    return (
        <section className={stc.SocialLinks} id={SectionTypes.CONTACTS}>
        <h2 className={cn(stc.Section_Title, stc.SocialLinks_Title)}>
          I&apos;ll be happy to answer any additional questions!
          <br />Contact information below.
        </h2>
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
      </section>
    )
}