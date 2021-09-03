import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { motion } from 'framer-motion';
import BottomNav from '../components/BottomNav';

export default function Home() {
  return (
    <div>
      <div className={styles.container}>
        <Head>
          <title>CMYK - Lime</title>
          <meta name="description" content="Interactive children app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <motion.div
            drag
            dragConstraints={{
              top: -50,
              left: -50,
              right: 50,
              bottom: 50,
            }}
            whileHover={{ scale: 1.3 }}
          >
            <h1 className={styles.title}>
              Welcome Team <span className={styles.lime}>Lime</span>!
            </h1>
          </motion.div>
        </main>
      </div>
      <BottomNav />
    </div>
  );
}
