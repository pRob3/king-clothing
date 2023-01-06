import styles from './button.module.css';

export const BUTTON_TYPES_CLASSES = {
  google: styles.googleSignIn,
  inverted: styles.inverted,
  default: '',
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`${styles.buttonContainer} ${buttonType}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
