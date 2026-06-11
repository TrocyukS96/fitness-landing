import ArrowButtonIcon from "@/components/icons/ArrowButtonIcon";
import Image from "next/image";
import styles from './ServiceCard.module.scss';
import { IServiceCard } from "../types";

interface Props{
    className?:string
  card:IServiceCard
    onClick:(value:string)=>void
}

const ServicesCard = ({className='',card,onClick}:Props) => {
  return (
      <div
        className={
          card.id % 2 === 0
            ? `${styles.card} ${styles.evenCard}`
            : `${styles.card} ${styles.oddCard} ${className}`
        }
        
      >
        <div className={styles.info}>
          <h3 className={styles.title}>{card.title}</h3>
          <p className={styles.description}>{card.description}</p>
        </div>
        <div className={styles.imageWrap}>
          <Image
            width={415}
            height={311}
            src={card.image}
            alt={card.title}
            className={styles.image}
          />
          <div className={styles.arrowWrapper} onClick={()=>onClick(card.title)}>
            <ArrowButtonIcon className={styles.arrow} />
          </div>
          <div className={styles.phone} />
        </div>
      </div>
  );
};

export default ServicesCard;
