import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

import Button, { BUTTON_TYPES_CLASSES } from '../button/button.component';
import styles from './payment-form.module.css';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: 10000 }),
    }).then((res) => res.json());

    const {
      paymentIntent: { client_secret },
    } = response;

    console.log(client_secret);

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: 'USER NAME',
        },
      },
    });

    if (paymentResult.error) {
      alert(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === 'succeeded') {
        alert('Payment Successful!');
      }
    }
  };
  return (
    <form className={styles.PaymentFormContainer} onSubmit={paymentHandler}>
      <div className={styles.FormContainer}>
        <h2>Credit Card Payment:</h2>
        <CardElement />
      </div>

      <Button buttonType={BUTTON_TYPES_CLASSES.inverted}> Pay Now </Button>
    </form>
  );
};

export default PaymentForm;
