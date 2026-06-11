import Image from "next/image";
import styles from "./FreeTrialSection.module.scss";

export const FreeTrialSection = () => {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <p className={styles.subtitle}>First free lesson</p>
            <h2 className={styles.title}>FREE!</h2>
          </div>

          <div className={styles.imageWrapper}>
            <Image
              src="/free-trial/free-trial.png"
              alt="Kirill conducts a free lesson"
              fill
              className={styles.image}
              priority
              sizes="(max-width: 768px) 80vw, 500px"
            />
          </div>
        </div>
      </section>
    </>
  );
};