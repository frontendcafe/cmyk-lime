import React, {Component} from "react";
import styles from '../styles/About.module.css'

const About = () =>{
    return (
          <main>
      <div className={styles.container}>
        <h3 className={styles.title}>Acerca de esta App...</h3>
        <h1 className={styles.lime}>CMYK 4: GRUPO LIME</h1>
        <p className={styles.negrita}>Idea incial: Juego narrativo con arte en base a texto</p>
        <div className={styles.textContainer}>
          <article className={styles.main}>
            <p className={styles.text}>Coordinador</p>
            <p className={styles.negrita}>Maximiliano Blanco</p>
          </article>
          <article className={styles.main}>
            <p className={styles.text}>Diseñador</p>
            <p className={styles.negrita}>Mauro Lazzarino</p>
          </article>
          <article className={styles.main}>
            <p className={styles.text}>Referente</p>
            <p className={styles.negrita}>Alan Pérez</p>
          </article>
        </div> 
        <p className={styles.text}>Equipo</p>
        <div className={styles.textContainer}>
          <article className={styles.main}> 
            <p className={styles.negrita}>Antonella Cardozo</p>
            <p className={styles.negrita}>Jonatan Merce</p>
          </article>
          <article className={styles.main}>
            <p className={styles.negrita}>David Lipshitz</p>
            <p className={styles.negrita}>Alejandro Berrini</p>
          </article>
          <article className={styles.main}>
            <p className={styles.negrita}>Karen Duarte</p>
            <p className={styles.negrita}>@Rortan</p>
          </article>
        </div>
      </div>
    </main>
    );    

}

export default About;