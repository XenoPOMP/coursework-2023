import cn from 'classnames';
import { FC } from 'react';
import styles from './Header.module.scss';
import { HeaderProps } from './Header.props';
import Logotype from '@ui/Logotype/Logotype';

const Header: FC<HeaderProps> = ({}) => {
  return (
    <header className={cn(styles.appHeader)}>
      <Logotype variant={'monochrome'} />

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
    </header>
  );
};

export default Header;
