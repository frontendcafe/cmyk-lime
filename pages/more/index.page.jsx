import styles from './more.module.css';
import IconHome from './IconHome';
import Link from 'next/link';

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
      <Link href={'/'}>
        <a className={styles.iconHome}>
          <IconHome />
        </a>
      </Link>
    </main>
  );
};

export default About;
