import { useDispatch, useSelector } from 'react-redux';
import {
  selectCartCount,
  selectIsCartOpen,
} from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import styles from './cart-icon.module.css';

const CartIcon = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <div className={styles.cartIconContainer} onClick={toggleIsCartOpen}>
      <ShoppingIcon className={styles.shoppingIcon} />
      <span className={styles.itemCount}>{cartCount}</span>
    </div>
  );
};

export default CartIcon;
