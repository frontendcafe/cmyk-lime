import { motion } from 'framer-motion';
import { useState } from 'react';
import styles from './puppet.module.css';

const Texto = ({ siJuegas }) => {
  return <motion.p className={styles.text}>{siJuegas}</motion.p>;
};

export default Texto;
