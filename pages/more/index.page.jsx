import styles from './more.module.css';

const About = () => {
  return (
    <main className={styles.background}>
      <div className={styles.container}>
        <h3 className={styles.title}>Más Libros</h3>
        <h1 className={styles.lime}>¡Próximamente!</h1>
        <p className={styles.negrita}>
          Nuevos libros y maneras de seguir aprendiendo
        </p>
      </div>
    </main>
  );
};

export default About;
