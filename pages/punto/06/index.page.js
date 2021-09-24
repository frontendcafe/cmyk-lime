import Head from 'next/head';
import styles from './06.module.css';
import { motion } from 'framer-motion';
import { useState } from 'react';
import PuntoPuppet from './PuntoPuppet';
import Link from 'next/link';
import Image from 'next/image';
import homeIcon from './icon_home.svg';

export default function Page06() {
  const [faceState, setFaceState] = useState('surprised');
  const [eyeState, setEyeState] = useState('eyesOpen');

  const handleDragStart = () => {
    setFaceState('smile');
    setEyeState('eyesOpen');
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
          <motion.div
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1.5 }}
          >
            <PuntoPuppet
              dragStart={handleDragStart}
              face={faceState}
              eyes={eyeState}
            />
          </motion.div>
        </main>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.3 }}
          className={styles.textContainer}
        >
          {'... Y HACERME PEQUEÑO'}
        </motion.h1>
      </div>
      <div className={styles.homeBtnContainer}>
        <Link href={'/'}>
          <a>
            <Image alt="" src={homeIcon}></Image>
          </a>
        </Link>
      </div>
    </div>
  );
}
