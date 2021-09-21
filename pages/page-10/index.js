import React from 'react';
import { motion } from 'framer-motion';
import styles from './page-10.module.css';
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
            },
            whileHover: { scale: 1.1 },
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            transition: { delay: 1, duration: 1.3, opacity: { duration: 1 } },
          }}
        />
      </div>

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1.3 }}
        className={styles.h1}
      >
        ...Y TAMBIÉN A LA DERECHA
      </motion.h1>

      <div className={styles.iconhome}>
        <IconHome />
      </div>
    </div>
  );
};

export default PageTen;
