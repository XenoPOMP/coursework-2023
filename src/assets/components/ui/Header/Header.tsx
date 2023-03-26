import cn from 'classnames';
import { FC } from 'react';
import styles from './Header.module.scss';
import { HeaderProps } from './Header.props';
import Logotype from '@ui/Logotype/Logotype';
import Navbar from '@ui/Navbar/Navbar';

const Header: FC<HeaderProps> = ({ tabIndex }) => {
  return (
    <header className={cn(styles.appHeader)}>
      <div className={cn(styles.container, styles.left)}>
        <Navbar tabIndex={tabIndex} />
      </div>

      <div className={cn(styles.container, styles.center)}>
        <Logotype variant={'monochrome'} />
      </div>

      <div className={cn(styles.container, styles.right)}>
        <div className={cn(styles.squareButton)}>
          <svg
            width='31'
            height='15'
            viewBox='0 0 31 15'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect y='6' width='30' height='3' rx='1.5' />
            <rect x='13' width='17.1429' height='3' rx='1.5' />
            <rect y='12' width='17.1429' height='3' rx='1.5' />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
