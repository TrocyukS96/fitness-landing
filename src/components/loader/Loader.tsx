import styles from "./Loader.module.scss";

const Loader = ({isLoading}:{isLoading?:boolean}) => {
  return (
    <>
      {isLoading && (
        <div className={styles.globalLoader}>
          <div className={styles.loaderContent}>
            <div className={styles.loaderSpinner}></div>
            <div className={styles.loaderText}>Loading...</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Loader;
