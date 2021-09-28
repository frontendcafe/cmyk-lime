import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { motion } from 'framer-motion';
import BottomNav from '../components/BottomNav';
import PuntoPuppet from '../components/PuntoPuppet';
import { useRouter } from 'next/router';
import { useState } from 'react';

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
        <motion.div
          drag
          whileHover={{ scale: 1.3 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1.5 }}
        >
          {/* Prueben cambiar de happy a blushed o a surprised y traten que abra los ojos */}
          {/* Pasar una prop asi es equivalente a happy={true} */}
          <PuntoPuppet happy eyesOpen />
        </motion.div>
      </main>
      <BottomNav />
    </div>
  );
}
