import styles from './spinner.module.css';

const Spinner = () => (
  <div className={styles.spinnerOverlay}>
    <div className={styles.spinnerContainer} />
  </div>
);

export default Spinner;
