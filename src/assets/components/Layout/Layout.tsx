import cn from 'classnames';
import { FC, ReactNode } from 'react';

import OfflineOverlay from '@components/OfflineOverlay/OfflineOverlay';

import GlobalProvider from '@providers/GlobalProvider/GlobalProvider';

import AnalyticsAgreementMessage from '@ui/AnalyticsAgreementMessage/AnalyticsAgreementMessage';
import Header from '@ui/Header/Header';
import { HeaderProps } from '@ui/Header/Header.props';

import styles from './Layout.module.scss';
import { LayoutProps } from './Layout.props';

/**
 * Layout component. Contains header, main part and analytics agreement
 * message overlay.
 *
 * @param {ReactNode} children    children component
 * @param {HeaderProps} header    header settings
 * @constructor
 */
const Layout: FC<LayoutProps> = ({ children, header }) => {
	return (
		<GlobalProvider>
			<Header {...header} />

			<main className={cn(styles.appMain)}>{children}</main>

			<AnalyticsAgreementMessage />
			<OfflineOverlay />
		</GlobalProvider>
	);
};

export default Layout;
