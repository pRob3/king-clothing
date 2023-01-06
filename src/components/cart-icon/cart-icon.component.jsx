import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import styles from './cart-icon.module.css';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className={styles.cartIconContainer} onClick={toggleIsCartOpen}>
      <ShoppingIcon className={styles.shoppingIcon} />
      <span className={styles.itemCount}>{cartCount}</span>
    </div>
  );
};

export default CartIcon;
