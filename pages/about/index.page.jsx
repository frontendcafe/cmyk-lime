import styles from './about.module.css';
import Members from './Members';
import Team from './Team';
import IconHome from './IconHome';
import Link from 'next/link';

const About = () => {
  return (
    <main className={styles.background}>
      <div className={styles.container}>
        <h3 className={styles.title}>Acerca de esta App...</h3>
        <h1 className={styles.lime}>CMYK 4: GRUPO LIME</h1>
        <p className={styles.negrita}>
          Idea incial: Juego narrativo con arte en base a texto
        </p>
        <div className={styles.textContainer}>
          <Members rol="Coordinador" name="Maximiliano Blanco" />
          <Members rol="Diseñador" name="Mauro Lazzarino" />
          <Members rol="Referente" name="Alan Pérez" />
        </div>
        <p className={styles.text}>Equipo</p>
        <div className={styles.textContainer}>
          <Team name1="Antonella Cardozo" name2="Jonatan Merce" />
          <Team name1="David Lipshitz" name2="Alejandro Berrini" />
          <Team name1="Karen Duarte" name2="Rortan" />
        </div>
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
