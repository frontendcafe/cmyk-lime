import Head from 'next/head';
import styles from './12.module.css';
import {
  motion,
  SharedLayoutContext,
  useMotionValue,
  useTransform,
} from 'framer-motion';
import PuntoPuppet from './PuntoPuppet';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Texto from './Texto';
import ButtonHome from './ButtonHome';

export default function Home() {
  const router = useRouter();
  const [texto, setText] = useState('Si juegas conmigo...');
  const nextPage = () => {
    console.log('Finished');
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>CMYK - Lime</title>
        <meta name="description" content="Interactive children app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* Prueben cambiar de happy a blushed o a surprised y traten que abra los ojos */}
        {/* Pasar una prop asi es equivalente a happy={true} */}
        <motion.div
          drag
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1.5 }}
          className={styles.punto_container}
        >
          <PuntoPuppet smile eyesClosed />
        </motion.div>
      </main>
      <div className={styles.text_container}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transitionEnd: { display: 'none' } }}
          transition={{ delay: 1.5, duration: 4 }}
          className={styles.text_container}
        >
          <Texto siJuegas={'Si juegas conmigo...'} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 6.5,
            duration: 4,
            display: { delay: 6.5, duration: 0 },
          }}
          className={styles.text_container}
          styles={{ display: 'none' }}
        >
          <Texto siJuegas={'Tu imaginación es el límite...'} />
        </motion.div>
      </div>
      <div className={styles.buttonHome}>
        <ButtonHome />
      </div>
    </div>
  );
}
