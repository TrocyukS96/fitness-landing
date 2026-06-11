"use client";

import Title from "@/components/title/Title";
import styles from "./FeedbackSection.module.scss";
import { useState } from "react";
import StarIcon from "@/components/icons/StarIcon";
import Image from "next/image";
import { SectionTypes } from "@/types";

const clients = [
  {
    id: 0,
    image: "/feedback/svetlana.webp",
    name: "Svetlana, 48 years old",
    title: "About training in the gym (LFC)",
    description:
      "I go to Kirill after a knee operation. Explains each movement — why, which muscles are working. Doesn't push through pain, but progress is felt: I already walk without a cane. Prices are reasonable, but booking must be made a week in advance.",
    rate: 5,
  },
  {
    id: 1,
    image: "/feedback/dmitriy.webp",
    name: "Dmitriy, 36 years old",
    title: "About massage",
    description:
      "Massage with Kirill is not just «massaging the back». Feels where the clamps are, works deeply. After the session the back breathes! The price is reasonable, especially if you consider that the service is provided with a home visit!",
    rate: 5,
  },
  {
    id: 2,
    image: "/feedback/olga.webp",
    name: "Olga, 29 years old",
    title: "About the course of home pilates",
    description:
      "Bought the online course of pilates. Plus: programs are short (15-20 min), everything is understandable even for a beginner. I like that during training Kirill gives feedback if necessary: corrects the technique through video calls. A great option if there is no time at the gym. The back stopped hurting!",
    rate: 5,
  },
  {
    id: 3,
    image: "/feedback/polyna.webp",
    name: "Polina, 31 years old",
    title: "About the course of home pilates: 2",
    description:
      "Bought the online course of pilates. Plus: programs are short (15-20 min), everything is understandable even for a beginner. I like that during training Kirill gives feedback if necessary: corrects the technique through video calls. A great option if there is no time at the gym. The back stopped hurting!",
    rate: 4,
  },
  {
    id: 4,
    image: "/feedback/artem.webp",
    name: "Artem, 42 years old",
    title: "About training and massage",
    description:
      "Work with Kirill for a year! Started with LFC (hernias of the spine), now I go for supporting training and massage. Knows my weak spots better than I do. The price has increased by 10% over the year, but there are no alternatives with his knowledge in Minsk.",
    rate: 4,
  },
];

const FeedbackSection = () => {
  const [activeFeedback, setActiveFeedback] = useState(clients[0]);
  return (
    <section className={styles.section} id={SectionTypes.FEEDBACK}>
      <div className={styles.container}>
        <Title
          value=" What do my clients say?"
          type="section"
          className={styles.mobileTitle}
        />
        <div className={styles.columns}>
          <div className={styles.content}>
            <Title
              value=" What do my clients say?"
              type="section"
              className={styles.title}
            />
            <div className={styles.card}>
              <div className={styles.rate}>
                {Array(activeFeedback.rate)
                  .fill("")
                  .map((_, i) => (
                    <StarIcon key={i} />
                  ))}
              </div>
              <p className={styles.cardDescription}>
                {activeFeedback.description}
              </p>
              <div className={styles.userName}>— {activeFeedback.name}</div>
            </div>
          </div>
          <div className={styles.tabs}>
            {clients.map((client) => (
              <div
                className={`${styles.tab} ${
                  activeFeedback.id === client.id ? styles.activeTab : ""
                }`}
                key={client.id}
                onClick={() => setActiveFeedback(client)}
              >
                <Image
                  width={100}
                  height={100}
                  className={styles.userImage}
                  src={client.image}
                  alt={client.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
