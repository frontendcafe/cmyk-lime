import styles from './styles/Intro.module.css';
import Link from 'next/link';
import { motion, useCycle, AnimatePresence } from 'framer-motion';
import { IconHome } from './components/IconHome';

import { Splash } from './components/01_Splash';
import { Hola } from './components/03_Hola.js';
import { SiJuegas } from './components/02_SiJuegas.js';
import { MuchasCosas } from './components/04_MuchasCosas.js';

export default function IntroComponent() {
  const [state, setState] = useCycle('1', '2', '3', '4', '5', '6', '7');
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));
  const fromCircle01UntilCircle03 = async () => {
    setState();
    await delay(6000); //1->2
    setState();
    await delay(200); //2->3
    await delay(3000); //me han hecho click //3->4
    setState();
    await delay(500); //4->5
    setState();
  };
  const fromCircle03UntilCircle07 = async () => {
    setState();
    await delay(300); //5->6
    setState();
  };
  return (
    <>
      <motion.main className={styles.container}>
        <div className={styles.circle_container}>
          <AnimatePresence>
            {state == '1' && (
              <Circle01 onclick={() => fromCircle01UntilCircle03()} />
            )}
          </AnimatePresence>

          <AnimatePresence>{state == '3' && <Circle02 />}</AnimatePresence>
          <AnimatePresence>
            {state == '5' && (
              <Circle03 onclick={() => fromCircle03UntilCircle07()} />
            )}
          </AnimatePresence>
          <AnimatePresence>{state == '7' && <Circle04 />}</AnimatePresence>
        </div>
      </motion.main>
    </>
  );
}

const HomeButton = () => {
  return (
    <div className={styles.iconhome}>
      <Link href={'/'}>
        <a>
          <IconHome />
        </a>
      </Link>
    </div>
  );
};
const Circle01 = ({ onclick }) => {
  return (
    <>
      <motion.p
        className={styles.text_circle01}
        initial={{ y: '-10vh', delay: 1.5, opacity: 0 }}
        animate={{
          y: 1,
          duration: 4,
          opacity: 1,
          transition: { delay: 3, duration: 3, easing: [0.42, 0, 0.6, 1] },
        }}
        exit={{
          y: '-20vh',
          duration: 4,
          opacity: 0,
          transition: { delay: 1, duration: 2, ease: 'easeInOut' },
        }}
      >
        Hola, soy un punto
      </motion.p>
      <motion.div
        className={styles.circle01}
        initial={{ opacity: 0, rotate: 1, transition: { rotate: 360 } }}
        animate={{
          opacity: 1,
          transition: { delay: 1, duration: 3, ease: 'easeInOut' },
        }}
        exit={{ y: 100, transition: { delay: 2, duration: 2 } }}
      >
        <Splash onClick={onclick} className={styles.click} />
      </motion.div>
    </>
  );
};
const Circle02 = () => {
  return (
    <>
      <motion.div
        className={styles.circle02}
        initial={{ y: '100vh', scale: 0 }}
        animate={{
          y: 1,
          scale: 1,
          transition: { duration: 2, easing: [0.42, 0, 0.58, 1] },
        }}
        exit={{ opacity: 1, duration: 0.1, rotate: 360 }}
      >
        <Hola className={styles.circle02} />
      </motion.div>
      <motion.p
        className={styles.text_circle02}
        initial={{ opacity: 0 }}
        animate={{ y: 2, opacity: 1 }}
        exit={{ opacity: 0, transition: { ease: 'easeInOut' } }}
      >
        Hola, soy un punto
      </motion.p>
      <div>
        <HomeButton />
      </div>
    </>
  );
};

const Circle03 = ({ onclick }) => {
  return (
    <>
      <motion.div
        className={styles.circle03}
        initial={{ rotate: [0, 360, 0, 360, 0, 360], scale: 0, duration: 0.5 }}
        animate={{
          scale: 1,
          transition: { duration: 1, easing: [0.42, 0, 0.6, 1] },
        }}
        exit={{ opacity: 0, duration: 0.5 }}
      >
        <SiJuegas onClick={onclick} className={styles.click} />
      </motion.div>

      <motion.p
        className={styles.text_circle03}
        initial={{ opacity: 0, delay: 2 }}
        animate={{ opacity: 1 }}
        exit={{ transition: { opacity: 0, delay: 1 } }}
      >
        Si juegas conmigo...
      </motion.p>
      <div>
        <HomeButton />
      </div>
    </>
  );
};

const Circle04 = () => {
  return (
    <>
      <motion.div
        className={styles.circle04}
        initial={{ opacity: 0, y: '-15vh', delay: 0.3 }}
        animate={{
          opacity: 1,
          rotate: 360,
          transition: {
            easings: [0.56, 8, 0.56, 8],
            type: 'spring',
            delay: 0.4,
            duration: 2,
          },
        }}
        exit={{ stiffness: 100, opacity: 0, duration: 2 }}
      >
        <Link href={'/punto/05'}>
          <a>
            <MuchasCosas className={styles.start} />
          </a>
        </Link>
      </motion.div>
      <motion.p
        className={styles.text_circle04}
        initial={{ opacity: 0, delay: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { delay: 1, duration: 10 } }}
      >
        ¡muchas cosas pueden pasar!
      </motion.p>
      <div>
        <HomeButton />
      </div>
    </>
  );
};
