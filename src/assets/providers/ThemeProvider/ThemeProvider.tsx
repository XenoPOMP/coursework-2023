import { FC } from 'react';
import { ProviderProps } from '@providers/Provider.props';
import cn from 'classnames';
import styles from './ThemeProvider.module.scss';

const ThemeProvider: FC<ProviderProps> = ({ children }) => {
  document.body.className = cn(styles.themes, styles.dark);

  return <>{children}</>;
};

export default ThemeProvider;
