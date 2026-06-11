"use client";
import Title from "@/components/title/Title";
import { SectionTypes } from "@/types";
import styles from "./FaqSection.module.scss";
import FaqItem from "./faq-item/FaqItem";

const faqItems = [
  {
    question: "Are online personal training sessions possible?",
    answer:
      "Yes, they are possible. Individual online training with a personalized program and feedback.",
  },
  {
    question: "Do you offer personal training in Minsk?",
    answer:
      "Personal training in Minsk with a personalized program tailored to your goals and level of preparation. Lessons are held at: pr. Pobedy, 7A.",
  },
  {
    question: "How do personal training sessions take place?",
    answer:
      "After the introductory training, I analyze your health and preparation. I create a personalized program tailored to your goals and possibilities.",
  },
  {
    question: "What Pilates exercises are suitable for beginners in your course?",
    answer:
      "1-st level — Pilates for beginners. Basic exercises with a detailed explanation of the Pilates technique for home workouts.",
  },
  {
    question: "How do online lessons on the course take place - is there feedback?",
    answer:
      "The course contains: a set of Pilates exercises of different difficulty, detailed video instructions for home workouts and personal feedback on your technique.",
  },
  {
    question:
      "Is there a training program for weight loss in home conditions?",
    answer:
      "Yes! The program has effective Pilates exercises for weight loss that can be performed at home.",
  },
  {
    question: "Private massage in Minsk with a home visit?",
    answer:
      "Yes, I offer private massage in Minsk with a home visit.",
  },
  {
    question: "What types of massage do you master?",
    answer:(
      <>
      <div>Classic massage, relaxing massage, sports massage, back massage(including massage of the cervical-vertebral zone).</div>
      <br />
      <div>Leave a request, and I will choose a convenient time for the <a href={`#${SectionTypes.SERVICES}`}><span className={styles.hugItem}>massage</span></a>.</div>
      </>
    )
  },
];

export const FAQSection = () => {
  return (
    <section className={styles.section} id={SectionTypes.FAQ}>
      <div className={styles.container}>
        <Title className={styles.title} type="section" value="Frequently asked questions" />
        <div className={styles.list}>
          {faqItems.map((item, index) => (
            <FaqItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
