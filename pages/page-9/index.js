import React from 'react';
import { motion } from 'framer-motion';
import styles from './Page-9.module.css';
import AllFaces from '../../components/AllFaces';
import IconHome from '../../components/IconHome';
import { useRouter } from 'next/router';

const PageNine = () => {
  const router = useRouter();
  const nextPage = () => {
    console.log('nextPage() called');
    setTimeout(() => {
      router.push('/page-10');
    }, 1500);
  };
  return (
    <div className={styles.bodypagenine}>
      <div className={styles.allfaces}>
        <AllFaces
          happy
          eyesOpen
          onFaceDragEnd={nextPage}
          motionConfig={{
            drag: true,
            drag: 'x',
            dragMomentum: false,
            dragConstraints: {
              top: -5,
              bottom: 5,
              left: -600,
              right: 0,
            },
            whileHover: { scale: 1.1 },
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { delay: 1, duration: 1.3 },
          }}
        />
      </div>

      <h1 className={styles.h1}>MOVERME A LA IZQUIERDA...</h1>

      <div className={styles.iconhome}>
        <IconHome />
      </div>
    </div>
  );
};

export default PageNine;
