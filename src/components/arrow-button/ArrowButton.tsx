import { ReactNode } from "react";
import Button from "../button/Button";
import styles from "./ArrowButton.module.scss";
import ArrowTopIcon from "../icons/ArrowTopIcon";

interface Props {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  btnClassName?: string;
  rootClassName?: string;
  arrowClassName?: string;
  onClick?: () => void;
}

const ArrowButton = ({
  btnClassName = "",
  arrowClassName = "",
  rootClassName = "",
  children,
  variant,
  onClick,
}: Props) => {
  return (
    <div className={`${rootClassName} ${styles.wrapper}`} onClick={onClick}>
      <Button className={`${btnClassName} ${styles.btn}`} variant={variant}>
        {children}
      </Button>
      <div className={`${styles.arrowWrapper} ${arrowClassName}`}>
        <ArrowTopIcon className={styles.arrow} />
      </div>
    </div>
  );
};

export default ArrowButton;
