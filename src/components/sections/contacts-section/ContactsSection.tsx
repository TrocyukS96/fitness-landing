import cn from "classnames";
import Image from "next/image";
import st from "../../../styles/app/MainPage.module.scss";
import stc from "../../../styles/app/components.module.scss";
import styles from "./ContactsSection.module.scss";

const list = [
  {
    title: "E-mail",
    description: "kirill.v.polovtsev@gmail.com",
    icon: "/email-icon.svg",
  },
  {
    title: "Call me!",
    description: "+375298501033",
    icon: "/phone-icon.svg",
  },
  {
    title: "Address",
    description: "Pobeditelei Ave., 7A",
    icon: "/location-icon.svg",
  },
];

const ContactsSection = () => {
  const showItems = () => {
    return list.map((item) => (
      <li key={item.title} >
        <div className={styles.iconWrap}>
          <Image src={item.icon} width={46} height={46} alt="contact icon" />
        </div>
        <div className={styles.itemContent}>
          <h6>{item.title}</h6>
          <div>{item.description}</div>
        </div>
      </li>
    ));
  };
  return (
    <section className={cn(styles.wrapper, st.GreenSection, st.Section)}>
      <div className={cn(stc.Wrapper)}>
        <h2 className={styles.title}>Contacts</h2>
        <ul className={styles.list}>{showItems()}</ul>
      </div>
    </section>
  );
};

export default ContactsSection;
