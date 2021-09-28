import { motion } from 'framer-motion';
import Head from 'next/head';
import { useRouter } from 'next/router';

import BottomHome from '../../../components/BottomHome';
import styles from './08.module.css';
import PuntoPuppet from './PuntoPuppet';

export default function Home() {
  const router = useRouter();
  const nextPage = () => {
    setTimeout(() => {
      router.push('/punto/09');
    }, 2000);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>CMYK - Lime</title>
        <meta name="description" content="Interactive children app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <PuntoPuppet
          onFaceDragEnd={nextPage}
          motionConfig={{
            drag: true,
            dragConstraints: {
              left: -2,
              rigth: 2,
            },
            dragMomentum: false,
            whileHover: { scale: 1.1 },
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 1, duration: 1.2 },
            },
          }}
          smile
          eyesOpen
          rightEyeOpen
        />
      </main>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1.3 }}
        className={styles.textContainer}
      >
        DESLIZARME HACIA ABAJO,
      </motion.h1>
      <div className={styles.iconHome}>
        <BottomHome />
      </div>
    </div>
  );
}
