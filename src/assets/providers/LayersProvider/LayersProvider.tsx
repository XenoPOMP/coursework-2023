import cn from 'classnames';
import { FC } from 'react';

import { ProviderProps } from '@providers/Provider.props';

import styles from './LayersProvider.module.scss';

const LayersProvider: FC<ProviderProps> = ({ children }) => {
	return <div className={cn(styles.layers)}>{children}</div>;
};

export default LayersProvider;
