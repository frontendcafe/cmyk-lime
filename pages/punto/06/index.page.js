import Head from 'next/head';
import styles from '../05/05.module.css';
import { useState } from 'react';
import { motion } from 'framer-motion';
import PuntoPuppet from './PuntoPuppet';
import Link from 'next/link';
import IconHome from './IconHome';

export default function Page06() {
  const [variant, setVariant] = useState('opacityStart');
  const variants = {
    opacityStart: { opacity: 1 },
    opacityEnd: { opacity: 0 },
  };

  const exitAnimation = () => {
    setVariant('opacityEnd');
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Head>
          <title>CMYK - Lime</title>
          <meta name="description" content="Interactive children app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <div>
            <PuntoPuppet exitAnimation={exitAnimation} />
          </div>
        </main>

        <motion.h1
          initial={{ opacity: 0 }}
          variants={variants}
          animate={variant}
          transition={{ delay: 1, duration: 1.3 }}
          className={styles.textContainer}
        >
          {'... Y HACERME PEQUEÑO'}
        </motion.h1>
      </div>
      <div className={styles.homeBtnContainer}>
        <Link href={'/'}>
          <a>
            <IconHome />
          </a>
        </Link>
      </div>
    </div>
  );
}
