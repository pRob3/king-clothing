import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Button, { BUTTON_TYPES_CLASSES } from '../button/button.component';
import { CartItem } from '../cart-item/cart-item.component';
import { selectCartItems } from '../../store/cart/cart.selector';

import styles from './cart-dropdown.module.css';

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
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
      <Button
        onClick={goToCheckoutHandler}
        buttonType={BUTTON_TYPES_CLASSES.inverted}
      >
        Go to Checkout
      </Button>
    </div>
  );
};

export default CartDropdown;
