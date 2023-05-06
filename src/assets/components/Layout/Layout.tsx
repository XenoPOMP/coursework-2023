import { FC } from 'react';
import { LayoutProps } from './Layout.props';
import GlobalProvider from '@providers/GlobalProvider/GlobalProvider';
import Header from '@ui/Header/Header';
import AnalyticsAgreementMessage from '@ui/AnalyticsAgreementMessage/AnalyticsAgreementMessage';
import styles from './Layout.module.scss';
import cn from 'classnames';

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
