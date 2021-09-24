import Head from 'next/head';
import styles from '../../../styles/05.module.css';
import { motion } from 'framer-motion';
import PuntoPuppet from '../../../components/PuntoPuppet';
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
        {/* Prueben cambiar de happy a blushed o a surprised y traten que abra los ojos */}
        {/* Pasar una prop asi es equivalente a happy={true} */}
        <PuntoPuppet
          motionConfig={{
            drag: true,
            dragMomentum: false,
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 1, duration: 1.2 },
            },
          }}
          happy
          eyesOpen
        />
      </main>
    </div>
  );
}
