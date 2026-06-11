"use client";
import Title from "@/components/title/Title";
import { SectionTypes } from "@/types";
import Image from "next/image";
import styles from "./AboutSection.module.scss";
import ArrowButton from "@/components/arrow-button/ArrowButton";
import { useState } from "react";
import MessageModal from "@/components/message-modal/MessageModal";

const benefitsData = [
  "Diploma in AFC and LFC",
  "Certified massage therapist",
  "5+ years of teamwork with orthopedists and kinesiologists",
  "Author of personal rehabilitation programs",
];

export const AboutSection = () => {
  const [trigger, setTrigger] = useState(0);
  return (
    <section className={styles.section} id={SectionTypes.ABOUT}>
      <div className={styles.container}>
        <div className={styles.imageWrap}>
          <Image
            width={605}
            height={756}
            className={styles.image}
            src="/about/new-about.webp"
            alt="couch image"
          />
          <div className={styles.counter}>
            <h3 className={styles.counterTitle}>5+</h3>
            <p className={styles.counterText}>Years of experience</p>
          </div>
          <div className={styles.phone} />
        </div>
        <div className={styles.content}>
          <h6 className={styles.subTitle}>Who I am</h6>
          <Title
            className={styles.title}
            type="section"
            value="Physical culture instructor"
          />
          <p className={styles.description}>
            Based on deep knowledge of anatomy, physiology and biomechanics,
            developed a training program for home pilates. The basis of the program
            is the principles of: deep muscle activation, smoothness of movements,
            full body control.
          </p>
          <ArrowButton
            btnClassName={styles.connectBtn}
            arrowClassName={styles.btnArrow}
            onClick={() => setTrigger((prev) => prev + 1)}
          >
            Get to know me
          </ArrowButton>
          <div className={styles.divider} />
          <div className={styles.benefits}>
            <h6 className={styles.benefitsTitle}>My qualities</h6>
            <ul className={styles.list}>
              {benefitsData.map((item) => (
                <div key={item} className={styles.benefitItem}>
                  <Image
                    width={20}
                    height={20}
                    src={"/icons/benefitIcon.svg"}
                    alt="quality icon"
                  />
                  <span>{item}</span>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <MessageModal trigger={trigger} />
    </section>
  );
};
