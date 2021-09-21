import Head from 'next/head';
import styles from './05.module.css';
import { motion } from 'framer-motion';
import { useState } from 'react';
import PuntoPuppet from './PuntoPuppet';
import Link from 'next/link';
import Image from 'next/image';
import homeIcon from './icon_home.svg';

export default function Page05() {
  const [scaleValue, setScaleValue] = useState(null);
  const [savedX, setSavedX] = useState(null);
  const [variant, setVariant] = useState('static');
  const [circleStyle, setCircleStyle] = useState({
    border: '2px dashed black',
    borderRadius: '50%',
    opacity: 1,
    width: '100px',
    height: '100px',
    position: 'absolute',
  });

  const variants = {
    static: { opacity: 1 },
    movingRight: {
      x: 15,
    },
    movingLeft: {
      x: -15,
    },
    grow: {
      scale: { scaleValue },
    },
  };
  const handleDragStart = () => {
    setCircleStyle({ ...circleStyle, display: 'none' });
  };

  const handleDrag = () => {
    setTestVar(2);
  };

  // const handleDrag = (x) => {
  //   // if (savedX === null) {
  //   //   setSavedX(x);
  //   //   return;
  //   // }
  //   if (x > savedX) {
  //     setVariant('grow');
  //     setScaleValue(scaleValue + 0.1);
  //     console.log(scaleValue);
  //   }
  //   // if (savedX < x) setVariant('movingRight');

  //   // if (savedX > x) setVariant('movingLeft');

  //   setSavedX(x);
  // };
  // };

  // const circleStyle = {
  //   border: '2px dashed #cccccc',
  //   borderRadius: '50%',
  //   opacity: 1,
  //   width: '100px',
  //   height: '100px',
  //   position: 'absolute',
  // };
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
            //drag
            //   onDrag={(e) => moveFace(e.x)}
            // onDrag={handleDrag}

            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            // animate={variant}
            variants={{ variants }}
            transition={{ delay: 1, duration: 1.5 }}
          >
            {/* Prueben cambiar de happy a blushed o a surprised y traten que abra los ojos */}
            {/* Pasar una prop asi es equivalente a happy={true} */}
            <motion.div
              style={circleStyle}
              animate={{
                x: 100,
                y: -100,
                opacity: [1, 0.5, 0],
              }}
              initial={{}}
              transition={{
                delay: 2,
                ease: 'linear',
                duration: 1,
                repeat: Infinity,
                repeatDelay: 2,
              }}
            ></motion.div>
            <motion.div
              style={circleStyle}
              animate={{
                x: -100,
                y: 100,
                opacity: [1, 0.5, 0],
              }}
              initial={{}}
              transition={{
                delay: 2,
                ease: 'linear',
                duration: 1,
                repeat: Infinity,
                repeatDelay: 2,
              }}
            ></motion.div>
            <PuntoPuppet dragStart={handleDragStart} blushed eyesClosed />
          </motion.div>
        </main>
        <div className={styles.textContainer}>Puedo Crecer...</div>
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
