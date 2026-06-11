"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./MotionBlock.module.scss"; // Module styles (optional)

interface Props {
  children: React.ReactNode;
  delay?: number; // Animation delay (sec)
  className?: string; // Additional classes
}

const MotionBlock = ({ children, className = "" }: Props) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Animate only once
    threshold: 0.1, // Triggers at 10% visibility
  });

  return (
    <motion.div
      ref={ref}
      transition={{
        duration: 0.8,
        delay: 0.1,
        ease: [0.17, 0.67, 0.83, 0.67], // Custom easing curve
      }}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      className={`${styles.wrapper} ${className}`} // Merge classes
    >
      {children}
    </motion.div>
  );
};

export default MotionBlock;
