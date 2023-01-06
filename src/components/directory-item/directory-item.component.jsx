import styles from './directory-item.module.css';

const DirectoryItem = ({ category }) => {
  const { title, imageUrl } = category;

  return (
    <div className={styles.directoryItemContainer}>
      <div
        className={styles.backgroundImage}
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      {/* <img /> */}
      <div className={styles.body}>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
