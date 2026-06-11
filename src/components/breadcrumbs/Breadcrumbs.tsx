"use client";
import { usePathname, useRouter } from "next/navigation";
import ArrowIcon from "../icons/ArrowIcon";
import styles from "./Breadcrumbs.module.scss";
import { useEffect, useState } from "react";
import DotIcon from "../icons/DotIcon";

const Breadcrumbs = () => {
  const router = useRouter();
  const pathName = usePathname();
  const [isShowTrainingPage, setIsShowTrainingPage] = useState(false);

  useEffect(() => {
    setIsShowTrainingPage(pathName.split("/").length > 3);
  }, [pathName]);
  return (
    <div className={styles.breadcrumbs}>
      <ArrowIcon />
      <div onClick={() => router.push("/")}>Home</div>
      {isShowTrainingPage && (
        <>
          <DotIcon />
          <div onClick={() => router.push("/dashboard/training")}>
            Workouts
          </div>
        </>
      )}
    </div>
  );
};

export default Breadcrumbs;
