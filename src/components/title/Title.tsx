import styles from "./Title.module.scss";
interface Props {
  type?: "section" | "modal";
  className?: string;
  value: string;
}

const Title = ({ type = "section", value, className = "" }: Props) => {
  const style = {
    section: styles.section,
    modal: styles.modal,
  }[type];

  const commonClass = `${styles.title} ${style} ${className}`;

  if (type === "modal") {
    return <h5 className={commonClass}>{value}</h5>;
  } else {
    return <h2 className={commonClass}>{value}</h2>;
  }
};

export default Title;
