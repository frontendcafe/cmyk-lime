import styles from './info.module.css';
import IconHome from './IconHome';
import Link from 'next/link';

function Info() {
  return (
    <div className={styles.body}>
      <h1 className={styles.h1}>Info para Padres</h1>
      <h2 className={styles.h2}>INFORMACION IMPORTANTE</h2>
      <p className={styles.p}>
        Esta es una aplicación pensada desde el inicio para que niñes puedan
        empezar a tener sus primeros pasos experimentando la interactividad de
        las animaciones y audio de la web. FrontEndCafe y los equipos de la
        iniciativa CMYK hacen esta y otras aplicaciones por amor al desarrollo
        de software y con el objetivo de que fomentar conocimiento, sin fines de
        lucro. Cualquier feedback que nos quieran dejar, pueden hacerlo en el
        canal de Discord de FEC
      </p>
      <Link href={'https://discord.gg/frontendcafe'}>
        <a>
          <p className={styles.h1}>Invitación a FEC</p>
        </a>
      </Link>
      <Link href={'/'}>
        <a className={styles.iconHome}>
          <IconHome />
        </a>
      </Link>
    </div>
  );
}

export default Info;
