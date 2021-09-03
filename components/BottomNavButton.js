import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/BottomNavButton.module.css';

const BottomNavButton = ({ text, route, icon }) => {
  return (
    <div className={styles.button}>
      <div>
        <Link href={route} passHref>
          <Image alt="" src={icon}></Image>
        </Link>
      </div>
      <Link href={route} passHref>
        <h1 className={styles.text}>{text}</h1>
      </Link>
    </div>
  );
};

export default BottomNavButton;
