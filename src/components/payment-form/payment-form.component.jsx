import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

import Button, { BUTTON_TYPES_CLASSES } from '../button/button.component';
import styles from './payment-form.module.css';

const PaymentForm = ({ stripe, elements }) => {
  const stripe = useStripe();
  const elements = useElements();

  const patmentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
  };
  return (
    <div className={styles.PaymentFormContainer}>
      <div className={styles.FormContainer}>
        <h2>Credit Card Payment:</h2>
        <CardElement />
      </div>

      <Button buttonType={BUTTON_TYPES_CLASSES.inverted}> Pay Now </Button>
    </div>
  );
};

export default PaymentForm;
