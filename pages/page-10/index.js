import React from 'react';
import { motion } from 'framer-motion';
import styles from './Page-10.module.css';
import AllFaces from '../../components/AllFaces';
import IconHome from '../../components/IconHome';
import { useRouter } from 'next/router';

const PageTen = () => {
  return (
    <div className={styles.bodypageten}>
      <div className={styles.allfaces}>
        <AllFaces
          happy
          eyesOpen
          motionConfig={{
            drag: true,
            drag: 'x',
            dragMomentum: false,
            dragConstraints: {
              top: -5,
              bottom: 5,
              left: 0,
              right: -600,
            },
            whileHover: { scale: 1.1 },
            initial: { opacity: 0, x: -600 },
            animate: { opacity: 1 },
            transition: { delay: 1, duration: 1.3 },
          }}
        />
      </div>

      <h1 className={styles.h1}>...Y TAMBIÉN A LA DERECHA</h1>

      <div className={styles.iconhome}>
        <IconHome />
      </div>
    </div>
  );
};

export default PageTen;
