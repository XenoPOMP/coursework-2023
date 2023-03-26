import cn from 'classnames';
import { FC } from 'react';
import styles from './Navbar.module.scss';
import { NavbarProps } from './Navbar.props';
import useLocalization from '@hooks/useLocalization';

const Navbar: FC<NavbarProps> = ({ tabIndex }) => {
  const loc = useLocalization();

  return (
    <nav className={cn(styles.headerNav)}>
      <div className={cn(styles.item, tabIndex === 0 ? styles.active : '')}>
        {loc.header.nav.mainPage}
      </div>

      <div className={cn(styles.item, tabIndex === 1 ? styles.active : '')}>
        {loc.header.nav.services}
      </div>

      <div className={cn(styles.item, tabIndex === 2 ? styles.active : '')}>
        {loc.header.nav.blog}
      </div>
    </nav>
  );
};

export default Navbar;
