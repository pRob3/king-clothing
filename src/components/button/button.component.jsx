import styles from './button.module.css';

export const BUTTON_TYPES_CLASSES = {
  google: styles.googleSignIn,
  inverted: styles.inverted,
  default: '',
};

const Button = ({ children, buttonType, isLoading, ...otherProps }) => {
  return (
    <button
      disabled={isLoading}
      className={`${styles.buttonContainer} ${buttonType} `}
      {...otherProps}
    >
      {isLoading ? <span className={styles.buttonSpinner}></span> : children}
    </button>
  );
};

export default Button;
