import styles from './about.module.css';

const Members = ({ rol, name }) => {
  return (
    <article className={styles.articulo}>
      <p className={styles.text}>{rol}</p>
      <p className={styles.negrita}>{name}</p>
    </article>
  );
};

export default Members;
