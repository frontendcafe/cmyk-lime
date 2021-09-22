import homeIcon from '../assets/svg/icons/icon_home.svg';
import styles from '../styles/BottomNav.module.css';
import BottomNavButton from './BottomNavButton';

const BottomHome = () => {
  return (
    <div className={styles.containerBtn}>
      <BottomNavButton route={'/home'} icon={homeIcon}></BottomNavButton>
    </div>
  );
};

export default BottomHome;
