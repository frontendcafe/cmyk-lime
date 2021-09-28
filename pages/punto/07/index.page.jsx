import { useRef } from 'react';

import { motion } from 'framer-motion';
import Head from 'next/head';

import BottomHome from '../../../components/BottomHome';
import styles from './07.module.css';
import PuntoPuppet from './PuntoPuppet';

export default function Home() {
  const mainRef = useRef(null);
  return (
    <div className={styles.container}>
      <Head>
        <title>CMYK - Lime</title>
        <meta name="description" content="Interactive children app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main ref={mainRef} className={styles.main}>
        <PuntoPuppet
          motionConfig={{
            drag: 'y',
            dragConstraints: mainRef,

            dragMomentum: false,
            whileHover: { scale: 1.1 },
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 1, duration: 1.2 },
            },
          }}
        />
      </main>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1.3 }}
        className={styles.textContainer}
      >
        PUEDO IR HACIA ARRIBA,
      </motion.h1>
      <div className={styles.iconHome}>
        <BottomHome />
      </div>
    </div>
  );
}
