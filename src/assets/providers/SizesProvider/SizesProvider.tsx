import cn from 'classnames';
import { FC } from 'react';
import styles from './SizesProvider.module.scss';
import { SizesProviderProps } from './SizesProvider.props';
import { ProviderProps } from '@providers/Provider.props';

const SizesProvider: FC<ProviderProps> = ({ children }) => {
  document.body.classList.add(styles.sizes);

  return <>{children}</>;
};

export default SizesProvider;
