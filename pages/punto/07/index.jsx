import { motion } from 'framer-motion';
import Head from 'next/head';

import BottomHome from '../../../components/BottomHome';
import PuntoPuppet from '../../../components/PuntoPuppet';
import styles from '../../../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CMYK - Lime</title>
        <meta name="description" content="Interactive children app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <motion.div
          drag="y"
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1.5 }}
        >
          {/* Prueben cambiar de happy a blushed o a surprised y traten que abra los ojos */}
          {/* Pasar una prop asi es equivalente a happy={true} */}
          <PuntoPuppet smile eyesOpen />
        </motion.div>
      </main>
      <BottomHome></BottomHome>
    </div>
  );
}
