import DirtectoryItem from '../directory-item/directory-item.component';
import styles from './directory.module.css';

const Directory = ({ categories }) => {
  return (
    <div className={styles.directoryContainer}>
      {categories.map((category) => (
        <DirtectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
