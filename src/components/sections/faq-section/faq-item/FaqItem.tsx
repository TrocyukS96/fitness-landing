// components/FaqItem/FaqItem.tsx
import { useState, useRef } from 'react';
import styles from './FaqItem.module.scss';

interface FaqItemProps {
  question: string;
  answer: string | React.ReactNode;
}

const FaqItem = ({ question, answer }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${styles.faqItem} ${isOpen ? styles.active : ''}`}>
      <button className={styles.question} onClick={toggleAccordion}>
        <span>{question}</span>
        <span className={styles.icon}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 1V15M1 8H15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>
      <div
        ref={contentRef}
        className={styles.answer}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0',
        }}
      >
        <div className={styles.answerContent}>{answer}</div>
      </div>
    </div>
  );
};

export default FaqItem;