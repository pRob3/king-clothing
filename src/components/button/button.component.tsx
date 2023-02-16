import { FC, ButtonHTMLAttributes } from 'react';
import classes from './button.module.css';

export enum BUTTON_TYPES_CLASSES {
  google = 'googleSignIn',
  inverted = 'inverted',
  default = '',
}

export type ButtonProps = {
  children?: React.ReactNode;
  buttonType?: BUTTON_TYPES_CLASSES;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({
  children,
  buttonType,
  isLoading,
  ...otherProps
}) => {
  return (
    <button
      disabled={isLoading}
      className={`${classes.buttonContainer} ${buttonType}`}
      {...otherProps}
    >
      {isLoading ? <span className={classes.buttonSpinner}></span> : children}
    </button>
  );
};

export default Button;
