import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { ReactComponent as KingLogo } from '../../assets/crown.svg';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { selectIsCartOpen } from '../../store/cart/cart.selector';

import { selectCurrentUser } from '../../store/user/user.selector';
import { signOutStart } from '../../store/user/user.action';

import styles from './navigation.module.css';

const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutUser = () => dispatch(signOutStart());

  return (
    <Fragment>
      <div className={styles.navigation}>
        <Link className={styles.logoContainer} to='/'>
          <KingLogo className={styles.logo} />
        </Link>
        <div className={styles.navLinksContainer}>
          <Link className={styles.navLink} to='/shop'>
            Shop
          </Link>
          {currentUser ? (
            <span className={styles.navLink} onClick={signOutUser}>
              Sign Out
            </span>
          ) : (
            <Link className={styles.navLink} to='/auth'>
              Sign In
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
