import cn from 'classnames';
import { FC } from 'react';

import { ProviderProps } from '@providers/Provider.props';

import styles from './SizesProvider.module.scss';

const SizesProvider: FC<ProviderProps> = ({ children }) => {
	return <div className={cn(styles.sizes)}>{children}</div>;
};

export default SizesProvider;
