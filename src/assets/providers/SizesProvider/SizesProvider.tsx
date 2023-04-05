import cn from 'classnames';
import { FC } from 'react';
import styles from './SizesProvider.module.scss';
import { ProviderProps } from '@providers/Provider.props';

const SizesProvider: FC<ProviderProps> = ({ children }) => {
  return <div className={cn(styles.sizes)}>{children}</div>;
};

export default SizesProvider;
