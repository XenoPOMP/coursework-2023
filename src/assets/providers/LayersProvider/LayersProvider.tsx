import cn from 'classnames';
import { FC } from 'react';
import styles from './LayersProvider.module.scss';
import { ProviderProps } from '@providers/Provider.props';

const LayersProvider: FC<ProviderProps> = ({ children }) => {
  return <div className={cn(styles.layers)}>{children}</div>;
};

export default LayersProvider;
