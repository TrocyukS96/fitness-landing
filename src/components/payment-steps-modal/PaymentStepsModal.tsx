"use client";
import { PackageType } from "@/types";
import Loader from "../loader/Loader";
import { Modal } from "../modal/Modal";
import PaymentStep from "./PaymentStep";
import styles from "./PaymentStepsModal.module.scss";
import { useCoursePay } from "@/hooks/useCoursePay";

interface IProps {
  isOpen: boolean
  type?: PackageType;

  closeModal: () => void
}

export const PaymentStepsModal = ({ type, isOpen, closeModal }: IProps) => {
  const { pay, isLoading } = useCoursePay()

  const handleClose = () => {
    closeModal()
  };

  const handlePay = async (sum: number) => {
    pay({
      courseIndex: 0,
      paymentData: {
        type: type || "base" as PackageType,
        sum: sum,
      }
    })
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={handleClose}
        className={styles.modal}
        isCancelIcon
      >
        <Loader isLoading={isLoading} />
        <div
          className={`${styles.content}`}
        >
          <div className={styles.wrapper}>
            <PaymentStep
              isAuth={true}
              type={type || "base" as PackageType}
              pay={handlePay}
              onAuth={() => {}}
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default PaymentStepsModal;
