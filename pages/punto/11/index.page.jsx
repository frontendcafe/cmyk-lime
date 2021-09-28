import styles from './Punto11.module.css';
import { motion } from 'framer-motion';
import PuntoPuppet from './PuntoPuppet';
import ButtonHome from './ButtonHome';
import Circle from './Circle';
import { useImperativeHandle, useState } from 'react';
import { useRouter } from 'next/router';

const Punto11 = () => {
  const router = useRouter();
  const nextPage = () => {
    setTimeout(() => {
      router.push('/punto/12');
    }, 2000);
  };
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <motion.div
          className={styles.circleContainer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
        >
          <Circle />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
          className={styles.faceContainer}
        >
          <PuntoPuppet
            onFaceDragEnd={nextPage}
            motionConfig={{
              drag: true,
              dragMomentum: false,
              whileHover: { scale: 1.1 },
              initial: { opacity: 0 },
              animate: {
                opacity: 1,
                transition: { delay: 1, duration: 1.2 },
              },
            }}
          />
        </motion.div>
      </main>
      <div className={styles.text_container}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1.5 }}
          className={styles.text_container}
        >
          <p className={styles.text}>Puedo ir en cualquier dirección</p>
        </motion.div>
      </div>
      <div className={styles.buttonHome}>
        <ButtonHome />
      </div>
    </div>
  );
};

export default Punto11;
