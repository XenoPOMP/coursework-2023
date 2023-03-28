import { FC } from 'react';
import { ProviderProps } from '@providers/Provider.props';
import cn from 'classnames';
import styles from './ThemeProvider.module.scss';
import useAppSettings from '@hooks/useAppSettings';

const ThemeProvider: FC<ProviderProps> = ({ children }) => {
  const { theme } = useAppSettings();

  document.body.className = cn(
    styles.themes,
    theme.get() === 'light' ? styles.light : '',
    theme.get() === 'dark' ? styles.dark : '',
  );

  return <>{children}</>;
};

export default ThemeProvider;
