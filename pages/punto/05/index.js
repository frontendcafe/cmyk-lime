import Head from 'next/head';
import styles from './05.module.css';
import { motion } from 'framer-motion';
import { useState } from 'react';
import PuntoPuppet from './PuntoPuppet';
import Link from 'next/link';
import Image from 'next/image';
import homeIcon from './icon_home.svg';

export default function Page05() {
  const [circleStyle, setCircleStyle] = useState({
    border: '2px dashed black',
    borderRadius: '50%',
    opacity: 1,
    width: '100px',
    height: '100px',
    position: 'absolute',
  });

  const slashedTransition = {
    delay: 2,
    ease: 'linear',
    duration: 1,
    repeat: Infinity,
    repeatDelay: 2,
  };

  const [faceState, setFaceState] = useState('blushed');
  const [eyeState, setEyeState] = useState('eyesClosed');
  const [text, setText] = useState('Puedo Crecer...');

  const handleDragStart = () => {
    setCircleStyle({ ...circleStyle, display: 'none' });
    setFaceState('surprised');
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
            <motion.div
              style={circleStyle}
              animate={{ x: -100, y: 100, opacity: [1, 0.5, 0] }}
              transition={slashedTransition}
            ></motion.div>
            <motion.div
              style={circleStyle}
              animate={{ x: 100, y: -100, opacity: [1, 0.5, 0] }}
              transition={slashedTransition}
            ></motion.div>
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
          {text}
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
