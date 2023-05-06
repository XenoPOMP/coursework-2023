import { FC, ReactNode } from 'react';
import { LayoutProps } from './Layout.props';
import GlobalProvider from '@providers/GlobalProvider/GlobalProvider';
import Header from '@ui/Header/Header';
import { HeaderProps } from '@ui/Header/Header.props';
import AnalyticsAgreementMessage from '@ui/AnalyticsAgreementMessage/AnalyticsAgreementMessage';
import styles from './Layout.module.scss';
import cn from 'classnames';

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
    </GlobalProvider>
  );
};

export default Layout;
