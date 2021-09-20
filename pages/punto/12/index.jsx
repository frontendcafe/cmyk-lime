import Head from 'next/head';
import styles from '../../../styles/12.module.css';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import PuntoPuppet from './PuntoPuppet';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function Home() {
  const router = useRouter();
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
          transition={{ delay: 2, duration: 1.5 }}
          className={styles.punto_container}
        >
          <PuntoPuppet smile eyesClosed />
        </motion.div>
      </main>
    </div>
  );
}
