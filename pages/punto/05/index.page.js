import Head from 'next/head';
import styles from './05.module.css';
import { motion } from 'framer-motion';
import { useState } from 'react';
import PuntoPuppet from './PuntoPuppet';
import Link from 'next/link';
import Image from 'next/image';
import homeIcon from './icon_home.svg';

export default function Page05() {
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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1.5 }}
          >
            <PuntoPuppet exitAnimation={exitAnimation} />
          </motion.div>
        </main>

        <motion.h1
          initial={{ opacity: 0 }}
          variants={variants}
          animate={variant}
          transition={{ delay: 1, duration: 1.3 }}
          className={styles.textContainer}
        >
          {'PUEDO CRECER...'}
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
