import Link from 'next/link';
import Image from 'next/image';
import styles from './buttonHome.module.css';
import iconHome from './icon_home.svg';

const ButtonHome = () => {
  return (
    <div className={styles.button}>
      <Link href="#">
        <a>
          <Image alt="" src={iconHome} />
        </a>
      </Link>
    </div>
  );
};

export default ButtonHome;
