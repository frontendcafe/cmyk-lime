import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import { motion } from 'framer-motion';
import PuntoPuppet from '../../components/PuntoPuppet';

export default function Page05() {
  const circleStyle = {
    border: '2px dashed #cccccc',
    borderRadius: '50%',
    opacity: 1,
    width: '100px',
    height: '100px',
    position: 'absolute',
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
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5, duration: 1.5 }}
        >
          {/* Prueben cambiar de happy a blushed o a surprised y traten que abra los ojos */}
          {/* Pasar una prop asi es equivalente a happy={true} */}
          <motion.div
            style={circleStyle}
            animate={{ x: 100, y: -100 }}
            initial={{ rotate: 1 }}
            transition={{
              delay: 7,
              ease: 'linear',
              duration: 1,
              repeat: Infinity,
              repeatDelay: 5,
            }}
          ></motion.div>
          <motion.div
            style={circleStyle}
            animate={{ x: -100, y: 100 }}
            initial={{ rotate: 1 }}
            transition={{
              delay: 7,
              ease: 'linear',
              duration: 1,
              repeat: Infinity,
              repeatDelay: 5,
            }}
          ></motion.div>
          <PuntoPuppet eyesOpen />
        </motion.div>
      </main>
    </div>
  );
}
