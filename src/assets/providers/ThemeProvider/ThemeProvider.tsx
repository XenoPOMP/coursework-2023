import cn from 'classnames';
import { FC } from 'react';

import { ProviderProps } from '@providers/Provider.props';

import useAppSettings from '@hooks/useAppSettings';

import styles from './ThemeProvider.module.scss';

const ThemeProvider: FC<ProviderProps> = ({ children }) => {
	const { theme } = useAppSettings();

	document.body.className = cn(
		styles.themes,
		theme.get() === 'light' ? styles.light : '',
		theme.get() === 'dark' ? styles.dark : ''
	);

	return <>{children}</>;
};

export default ThemeProvider;
