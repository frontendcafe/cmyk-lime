import styles from './12.module.css';
import { motion } from 'framer-motion';
import PuntoPuppet from './PuntoPuppet';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Texto from './Texto';
import ButtonHome from './ButtonHome';

export default function Home() {
  const router = useRouter();
  const [texto, setText] = useState('Si juegas conmigo...');
  const nextPage = () => {
    router.push('/punto/13');
  };

  return (
    <div className={styles.container}>
      <main onClick={nextPage} className={styles.main}>
        <motion.div
          whileHover={{ cursor: 'pointer' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1.5, cursor: { delay: 0 } }}
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
