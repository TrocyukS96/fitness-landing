'use client'
import { Subscription } from "@/types";
import styles from "./Subscriptions.module.scss";
import Image from "next/image";
import SubscriptionButton from "./SubscriptionButton";
import { useRouter } from "next/navigation";

interface Props {
  card: Subscription;
}

const SubscriptionCard = ({ card }: Props) => {
  const router = useRouter()
    
    


  return (
    <li className={styles.card}onClick={()=>router.push('training/1')}>
      <Image
        src={card.image}
        width={150}
        height={200}
        sizes="100vw"
        className={styles.image}
        alt="subscription image"
      />
      <div className={styles.cardContent}>
        <h5 className={styles.cardName}>{card.name}</h5>
        <p className={styles.cardDescription}>{card.description}</p>
        <SubscriptionButton date={card.purchase_date}/>
      </div>
    </li>
  );
};

export default SubscriptionCard;
