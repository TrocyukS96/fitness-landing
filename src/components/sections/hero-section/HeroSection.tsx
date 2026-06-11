"use client";
import ArrowButton from "@/components/arrow-button/ArrowButton";
import styles from "./HeroSection.module.scss";
import Image from "next/image";
import { SectionTypes } from "@/types";
import useResize from "@/hooks/useResize";
import { useState } from "react";
import MessageModal from "@/components/message-modal/MessageModal";

export const HeroSection = () => {
  const [trigger, setTrigger] = useState(0);
  const width = useResize();
  return (
    <section className={styles.section} id={SectionTypes.HERO}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.content}>
            <div className={styles.subTitle}>Hello, I&apos;m Kirill</div>
            <div className={styles.heroTitle}>
              Your <span className={styles.primaryText}>fitness</span> trainer
            </div>
            <div className={styles.descriptionWrap}>
              <p className={styles.text}>
                Authorized training programs. Preventive physical culture and pilates for an active life.
              </p>
              <ArrowButton
                arrowClassName={styles.btnArrowWrapper}
                onClick={() => setTrigger((prev) => prev + 1)}
              >
                Sign up
              </ArrowButton>
            </div>
          </div>
          {width.isScreenSm && (
            <Image
              className={styles.heroCouchImageMobile}
              src={'/hero-couch.webp'}
              width={500}
              height={500}
              priority
              quality={75}
              // blurDataURL={HeroCouch.blurDataURL}
              alt="hero section background"
            />
          )}
        </div>
        <Image
          className={styles.heroBgImage}
          width={1920}
          height={1080}
          src={"/bg-hero-pattern.avif"}
          alt="hero section background"
        />
        {!width.isScreenSm && (
          <Image
            className={styles.heroCouchImage}
            src={"/hero-couch.webp"}
            width={1700}
            height={600}
            priority
            alt="hero section background"
          />
        )}
        <div className={styles.heroGradient} />
        <div className={styles.bottomTitle}>Be better</div>
      </div>
      <MessageModal trigger={trigger} />
    </section>
  );
};
