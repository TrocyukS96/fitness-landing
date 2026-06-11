"use client";
import { Subscription } from "@/types";
import { useMemo } from "react";
import SubscriptionCard from "./SubscriptionCard";
import styles from "./Subscriptions.module.scss";
import Image from "next/image";

interface Props {
  list: Subscription[];
}

const Subscriptions = ({ list }: Props) => {
  const items = useMemo(() => {
    return list.map((item) => <SubscriptionCard key={item.id} card={item} />);
  }, [list]);

  if (list.length === 0) {
    return <div className={styles.noData}>You have no available subscriptions</div>;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <ul className={styles.list}>{items}</ul>
      </div>
      <Image
        className={styles.phoneImage}
        width={430}
        height={522}
        alt="coatch image1"
        src={"/training-phone.png"}
      />
    </div>
  );
};

export default Subscriptions;
