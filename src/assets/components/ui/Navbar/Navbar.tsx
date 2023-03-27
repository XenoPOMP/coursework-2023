import cn from 'classnames';
import { FC } from 'react';
import styles from './Navbar.module.scss';
import { NavbarProps } from './Navbar.props';
import useLocalization from '@hooks/useLocalization';
import { NavLink } from 'react-router-dom';

const Navbar: FC<NavbarProps> = ({ tabIndex }) => {
  const loc = useLocalization();

  return (
    <nav className={cn(styles.headerNav)}>
      <NavLink
        to={'/'}
        className={cn(styles.item, tabIndex === 0 ? styles.active : '')}
      >
        {loc.header.nav.mainPage}
      </NavLink>

      <NavLink
        to={'/services'}
        className={cn(styles.item, tabIndex === 1 ? styles.active : '')}
      >
        {loc.header.nav.services}
      </NavLink>

      <div className={cn(styles.item, tabIndex === 2 ? styles.active : '')}>
        {loc.header.nav.blog}
      </div>
    </nav>
  );
};

export default Navbar;
