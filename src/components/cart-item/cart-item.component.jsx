import styles from './cart-item.module.css';

export const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div className={styles.cartItemContainer}>
      <img src={imageUrl} alt={`${name}`} />
      <div className={styles.itemDetails}>
        <span className={styles.name}>{name}</span>
        <span>
          {quantity} x {price}
        </span>
      </div>
    </div>
  );
};
