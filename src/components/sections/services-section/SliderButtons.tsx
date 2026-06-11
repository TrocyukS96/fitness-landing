import ArrowTopIcon from '@/components/icons/ArrowTopIcon';
import styles from './SliderButtons.module.scss';

interface Props {
  className?: string;
  onScrollPrev: () => void;
  onScrollNext: () => void;
}

const SliderButtons = ({ className='', onScrollPrev, onScrollNext }: Props) => {
  return (
    <div className={`${styles.emblaButtons} ${className}`}>
      <button className={styles.emblaButton} onClick={onScrollPrev}>
        <ArrowTopIcon className={`${styles.arrow} ${styles.arrowLeft}`} />
      </button>
      <button className={styles.emblaButton} onClick={onScrollNext}>
        <ArrowTopIcon className={`${styles.arrow} ${styles.arrowRight}`} />
      </button>
    </div>
  );
};

export default SliderButtons;