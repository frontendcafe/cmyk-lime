import Head from 'next/head';
import styles from './Punto11.module.css';
import { motion } from 'framer-motion';
import PuntoPuppet from '../../../components/PuntoPuppet';
import CDireccion from './CDireccion';

const Punto11 = () => {
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
          transition={{ delay: 1, duration: 1.5 }}
        >
          {/* Prueben cambiar de happy a blushed o a surprised y traten que abra los ojos */}
          {/* Pasar una prop asi es equivalente a happy={true} */}
          <PuntoPuppet
            motionConfig={{
              drag: true,
              dragConstraints: {
                top: -5,
                bottom: 5,
              },
              dragMomentum: false,
              whileHover: { scale: 1.1 },
              initial: { opacity: 0 },
              animate: {
                opacity: 1,
                transition: { delay: 1, duration: 1.2 },
              },
            }}
            happy
            eyesOpen
          />
        </motion.div>
      </main>
    </div>
  );
};

export default Punto11;
