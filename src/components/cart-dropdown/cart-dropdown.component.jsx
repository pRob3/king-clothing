import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/cart.context';

import Button from '../button/button.component';
import { CartItem } from '../cart-item/cart-item.component';

import styles from './cart-dropdown.module.css';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };

  return (
    <div className={styles.cartDropdownContainer}>
      <div className={styles.cartItems}>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span className={styles.emptyMessage}>Your cart is empty</span>
        )}
      </div>
      <Button onClick={goToCheckoutHandler} buttonType='inverted'>
        Go to Checkout
      </Button>
    </div>
  );
};

export default CartDropdown;
