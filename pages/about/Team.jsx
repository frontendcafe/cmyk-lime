import styles from '../../styles/About.module.css';

const Team = ({ name1, name2 }) => {
  return (
    <article className={styles.articulo}>
      <p className={styles.negrita}>{name1}</p>
      <p className={styles.negrita}>{name2}</p>
    </article>
  );
};

export default Team;
