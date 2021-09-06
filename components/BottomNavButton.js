import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/BottomNav.module.css';

const BottomNavButton = ({ text, route, icon }) => {
  return (
    <div className={styles.button}>
      <Link href={route}>
        <a>
          <Image alt="" src={icon} />
          <h1 className={styles.text}>{text}</h1>
        </a>
      </Link>
    </div>
  );
};

export default BottomNavButton;
