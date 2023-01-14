import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import {
  addItemToCart,
  removeItemToCart,
  clearItemFromCart,
} from '../../store/cart/cart.action';

import styles from './checkout-item.module.css';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  // Clear cart
  const clearCartHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));
  // Add Item
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  // Remove Item
  const removeItemHandler = () =>
    dispatch(removeItemToCart(cartItems, cartItem));

  return (
    <div className={styles.checkoutItemContainer}>
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className={styles.name}>{name}</span>
      <span className={styles.quantity}>
        <div className={styles.arrow} onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className={styles.value}>{quantity}</span>
        <div className={styles.arrow} onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className={styles.price}>{price}</span>
      <div className={styles.removeButton} onClick={clearCartHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
