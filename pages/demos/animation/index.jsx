import { motion } from 'framer-motion';
import styles from './example.module.css';
import curve from './curve_data';

const CDireccion = () => {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <motion.svg xmlns="http://www.w3.org/2000/svg" width="650" height="265">
          <g drag id="curve" fill="#4ccd43" fillOpacity=".062">
            {curve.paths.map((path, idx) => (
              <path d={path} key={idx} />
            ))}
          </g>
        </motion.svg>
      </div>
    </main>
  );
};

export default CDireccion;
