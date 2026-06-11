import { useCallback } from "react";
import styles from "./Subscriptions.module.scss";

interface Props {
  date: number;
}

// const getDayWord = (days: number) => {
//   if (days === 1) return "день";
//   if (days >= 2 && days <= 4) return "дня";
//   return "дней";
// };

// const getRemainingWord = (days: number) => {
//   if (days === 1) return "Остался";
//   if (days === 2 || days === 3 || days === 4) return "Осталось";
//   return "Осталось";
// };

const SubscriptionButton = ({ date }: Props) => {
  // const [status, setStatus] = useState<{
  //   showButton: boolean;
  //   message: string;
  //   isExpired: boolean;
  // }>({
  //   showButton: false,
  //   message: "",
  //   isExpired: false,
  // });

  const getDateFromTimeStamp = useCallback(() => {
    const targetDate = new Date(date);

    // Получаем компоненты даты
    const day = String(targetDate.getDate()).padStart(2, "0");
    const month = String(targetDate.getMonth() + 1).padStart(2, "0"); // Месяцы начинаются с 0
    const year = targetDate.getFullYear();

    return `${day}.${month}.${year}`;
  }, [date]);

  // useEffect(() => {
  //   const updateStatus = () => {
  //     const targetDate = getDateFromTimeStamp();
  //     const now = Date.now();
  //     const timeLeft = date - now;
  //     const oneDayMs = 24 * 60 * 60 * 1000;

  //     if (timeLeft <= 0) {
  //       // Подписка истекла
  //       setStatus({
  //         showButton: true,
  //         message: `Подписка истекла ${targetDate}`,
  //         isExpired: true,
  //       });
  //     } else {
  //       const daysLeft = Math.ceil(timeLeft / oneDayMs);

  //       if (daysLeft <= 3) {
  //         setStatus({
  //           showButton: true,
  //           message: `${getRemainingWord(daysLeft)} ${daysLeft} ${getDayWord(
  //             daysLeft
  //           )}`,
  //           isExpired: false,
  //         });
  //       } else {
  //         setStatus({
  //           showButton: false,
  //           message: `Доступен до ${targetDate}`,
  //           isExpired: false,
  //         });
  //       }
  //     }
  //   };

  //   updateStatus();
  // }, [date, getDateFromTimeStamp]);

  // const showValidContent = () => {
  //   if (status.showButton) {
  //     return (
  //       <div className={styles.errorDate}>
  //         <span>{status.message}</span>
  //         <Button className={styles.subscrBtn}>Продлить подписку</Button>
  //       </div>
  //     );
  //   }
  //   return status.message;
  // };

  // return <div className={styles.expiredDate}>{showValidContent()}</div>;
  return (
    <div className={styles.expiredDate}>
      Purchase date: {getDateFromTimeStamp()}
    </div>
  );
};

export default SubscriptionButton;
