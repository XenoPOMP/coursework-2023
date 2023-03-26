import cn from 'classnames';
import { FC } from 'react';
import styles from './Header.module.scss';
import { HeaderProps } from './Header.props';
import Logotype from '@ui/Logotype/Logotype';

const Header: FC<HeaderProps> = ({}) => {
  return (
    <header className={cn(styles.appHeader)}>
      <Logotype variant={'monochrome'} />
    </header>
  );
};

export default Header;
