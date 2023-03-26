import { FC } from 'react';
import { LayoutProps } from './Layout.props';
import GlobalProvider from '@providers/GlobalProvider/GlobalProvider';
import Header from '@ui/Header/Header';

const Layout: FC<LayoutProps> = ({ children, header }) => {
  return (
    <GlobalProvider>
      <Header {...header} />

      <main>{children}</main>
    </GlobalProvider>
  );
};

export default Layout;
