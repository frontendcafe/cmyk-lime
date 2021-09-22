 import BottomNavButton from './BottomNavButton';
 
 import aboutIcon from '../icons/icon_about.svg';
 import bookIcon from '../icons/icon_book.svg';
 import parentsIcon from '../icons/icon_parents.svg';
  import styles from '../styles/BottomNav.module.css'

 export const BottomNav = () => {
   return (
     <div className={styles.containerBtn}>
       <BottomNavButton text={'Acerca'} route={'/about'} icon={aboutIcon} />
       <BottomNavButton text={'Info Padres'} route={'/info'} icon={parentsIcon} />
       <BottomNavButton text={'Más Libros'} route={'/more'} icon={bookIcon} />
     </div>
   );
 };

