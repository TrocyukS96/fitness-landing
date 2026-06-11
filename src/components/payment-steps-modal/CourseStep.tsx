import React from "react";
import styles from './PaymentStepsModal.module.scss'
import commonStyles from './PaymentStepsModal.module.scss';
import Title from "../title/Title";
import { coursesData } from "@/utils/courses-data";
import { BadgeCheck } from "lucide-react";
import Preview from "./coursePreview/CoursePreview";
import Button from "../button/Button";

interface Props {
  courseIndex:number
  isAuth:boolean
  toAuth:()=>void
  openVideo:()=>void
  changeStep:()=>void
  changeIndex:(param:number)=>void
}

const CourseStep = ({courseIndex,isAuth,changeStep,changeIndex,openVideo,toAuth}:Props) => {
  return (
    <div
    key={`tariff-${courseIndex}`}
    className={styles.ContentInner}
  >
    <Title
      type="modal"
      className={commonStyles.title}
      value={coursesData[courseIndex].modalTitle}
    />
    <div className={styles.description}  >
      {coursesData[courseIndex].modalSubtitles.map(
        (subtitle, i) => (
          <div className={styles.descriptionItem} key={i}>
            <BadgeCheck color="var(--dark_yellow)" />
            <p key={i}>{subtitle}</p>
          </div>
        )
      )}
    </div>
    <Preview
      index={courseIndex}
      listLength={coursesData.length}
      setIndex={changeIndex}
      setOpenModal={openVideo}
    />
    <Button
      className={styles.buyBtn}
      disabled={!isAuth}
      onClick={changeStep}
    >
      Next
    </Button>
    {!isAuth && (
      <div className={styles.notAuthText}>
        To purchase a course on the website, you must be{" "}
        <span onClick={toAuth}>logged in</span>.
      </div>
    )}
  </div>
  );
};

export default CourseStep;
