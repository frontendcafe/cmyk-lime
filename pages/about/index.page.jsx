import styles from '../../styles/About.module.css';
import Members from './Members';
import Team from './Team';

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
    </main>
  );
};

/*

const About = () =>{
    return (
        <main className={styles.background}>
                <div className={styles.container}>
                    <h3 className={styles.title}>Acerca de esta App...</h3>
                    <h1 className={styles.lime}>CMYK 4: GRUPO LIME</h1>
                    <p className={styles.negrita}>Idea incial: Juego narrativo con arte en base a texto</p>
                    <div className={styles.textContainer}>
                        <article className={styles.articulo}>
                            <p className={styles.text}>Coordinador</p>
                            <p className={styles.negrita}>Maximiliano Blanco</p>
                        </article>
                        <article className={styles.articulo}>
                            <p className={styles.text}>Diseñador</p>
                            <p className={styles.negrita}>Mauro Lazzarino</p>
                        </article>
                        <article className={styles.articulo}>
                            <p className={styles.text}>Referente</p>
                            <p className={styles.negrita}>Alan Pérez</p>
                        </article>
                    </div> 
                    
                    <div className={styles.textContainer2}>
                        <p className={styles.text}>Equipo</p>
                        <div className={styles.textContainer}>
                            <article className={styles.articulo}> 
                                <p className={styles.negrita}>Antonella Cardozo</p>
                                <p className={styles.negrita}>Jonatan Merce</p>
                            </article>
                            <article className={styles.articulo}>
                                <p className={styles.negrita}>David Lipshitz</p>
                                <p className={styles.negrita}>Alejandro Berrini</p>
                            </article>
                            <article className={styles.articulo}>
                                <p className={styles.negrita}>Karen Duarte</p>
                                <p className={styles.negrita}>Rortan</p>
                            </article>
                        </div>
                    </div>
                </div>
        </main>
        
    );    
}*/

export default About;
