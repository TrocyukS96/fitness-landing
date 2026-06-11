import ArrowIcon from "@/components/icons/ArrowIcon";
import PlayInitIcon from "@/components/icons/PlayInitIcon";
import cn from "classnames";
import styles from "./CouresePreview.module.scss";

interface Props {
  index: number;
  listLength: number;
  setIndex: (val: number) => void;
  setOpenModal: (val: boolean) => void;
}

const Preview = ({ index, listLength, setIndex, setOpenModal }: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content} role="button">
      </div>
      <div className={styles.videoBlock}>
        <h6>Preview video</h6>
        <div className={styles.btnWrapper}>
          <button
            className={styles.content_PlayButton}
            onClick={() => {
              setOpenModal(true);
            }}
          >
            <PlayInitIcon />
          </button>
          <div className={styles.Controls}>
            <button
              className={cn(styles.Controls_Button, {
                [styles.Active]: index !== 0,
              })}
              aria-label="Go to previous plan"
              aria-hidden={index === 0}
              onClick={() => {
                if (index !== null && index > 0) {
                  setIndex(index - 1);
                }
              }}
            >
              <i>
                <ArrowIcon className={styles.leftArrow} />
              </i>
            </button>

            <button
              className={cn(styles.Controls_Button, {
                [styles.Active]: index !== listLength - 1,
              })}
              aria-label="Go to next plan"
              aria-hidden={index === listLength - 1}
              onClick={() => {
                if (index !== null && index < listLength - 1) {
                  setIndex(index + 1);
                }
              }}
            >
              <i>
                <ArrowIcon />
              </i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
