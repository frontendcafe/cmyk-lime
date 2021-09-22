import Head from 'next/head';
import styles from './Punto13.module.css';
import { motion } from 'framer-motion';
import PuntoPuppet from './PuntoPuppet';
import ButtonHome from './ButtonHome';

const Punto13 = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>CMYK - Lime</title>
        <meta name="description" content="Interactive children app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <motion.div
          drag
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: 1.5 }}
          transition={{ delay: 1, duration: 3 }}
          className={styles.faceContainer}
        >
          {/* Prueben cambiar de happy a blushed o a surprised y traten que abra los ojos */}
          {/* Pasar una prop asi es equivalente a happy={true} */}
          <PuntoPuppet
            motionConfig={{
              drag: true,
              dragConstraints: {
                top: -5,
                bottom: 5,
              },
              dragMomentum: false,
              whileHover: { scale: 1.1 },
              initial: { opacity: 0 },
              animate: {
                opacity: 1,
                transition: { delay: 1, duration: 1.2 },
              },
            }}
            smile
            leftEyeWink
          />
        </motion.div>
      </main>
      <div className={styles.text_container}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 2 }}
          className={styles.text_container}
        >
          <p className={styles.text}>¿Jugamos de nuevo?</p>
        </motion.div>
      </div>
      <div className={styles.buttonHome}>
        <ButtonHome />
      </div>
    </div>
  );
};

export default Punto13;