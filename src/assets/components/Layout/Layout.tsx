import { FC } from 'react';
import { LayoutProps } from './Layout.props';
import GlobalProvider from '@providers/GlobalProvider/GlobalProvider';
import Header from '@ui/Header/Header';
import AnalyticsAgreementMessage from '@ui/AnalyticsAgreementMessage/AnalyticsAgreementMessage';

const Layout: FC<LayoutProps> = ({ children, header }) => {
  return (
    <GlobalProvider>
      <Header {...header} />

      <main>{children}</main>

      <AnalyticsAgreementMessage />
    </GlobalProvider>
  );
};

export default Layout;
