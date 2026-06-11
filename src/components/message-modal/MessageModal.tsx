import { useEffect, useState } from "react";
import { Modal } from "../modal/Modal";
import styles from "./MesssageModal.module.scss";
import FooterForm from "../footer/footer-form/FooterForm";
import CancelIcon from "../icons/CancelIcon";

const MessageModal = ({ trigger,topic }: { trigger: number,topic?:string }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  useEffect(() => {
    if (trigger > 0) {
      setIsOpen(true);
    }
  }, [trigger]);
  return (
    <Modal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
        disableModalContent={true}
      className={styles.modal}
    >
      <div className={styles.content}>
        <button onClick={handleClose} className={styles.cancelBtn}>
          <CancelIcon />
        </button>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Send me a message</h1>
          <FooterForm topic={topic} onClose={() => setIsOpen(false)} />
        </div>
      </div>
    </Modal>
  );
};

export default MessageModal;
