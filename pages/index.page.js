import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { motion } from 'framer-motion';
import BottomNav from '../components/BottomNav';
import PuntoPuppet from '../components/PuntoPuppet';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const nextPage = () => {
    router.push('/punto/01');
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>CMYK - Lime</title>
      </Head>

      <main className={styles.main}>
        <motion.div
          onClick={nextPage}
          drag
          dragConstraints={{
            top: 1,
            bottom: 1,
            left: 1,
            right: 1,
          }}
          whileHover={{ scale: 1.6, cursor: 'pointer' }}
          initial={{ opacity: 0, scale: 1.5 }}
          animate={{ opacity: 1 }}
          transition={{
            opacity: {
              delay: 1.5,
              duration: 1.5,
            },
            cursor: { delay: 0 },
            scale: { delay: 0.5, duration: 1 },
          }}
        >
          <PuntoPuppet />
        </motion.div>
      </main>
      <BottomNav />
    </div>
  );
}
