import aboutIcon from '../assets/svg/icons/icon_about.svg';
import bookIcon from '../assets/svg/icons/icon_book.svg';
import parentsIcon from '../assets/svg/icons/icon_parents.svg';
import styles from '../styles/BottomNav.module.css';
import BottomNavButton from './BottomNavButton';

const BottomNav = () => {
  return (
    <div className={styles.containerBtn}>
      <BottomNavButton text={'Acerca'} route={'/about'} icon={aboutIcon} />
      <BottomNavButton
        text={'Info Padres'}
        route={'/info'}
        icon={parentsIcon}
      />
      <BottomNavButton text={'Más Libros'} route={'/more'} icon={bookIcon} />
    </div>
  );
};

export default BottomNav;
