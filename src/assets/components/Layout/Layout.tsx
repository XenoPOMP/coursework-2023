import { FC } from 'react';
import { LayoutProps } from './Layout.props';
import GlobalProvider from '@providers/GlobalProvider/GlobalProvider';

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <GlobalProvider>
      <main>{children}</main>
    </GlobalProvider>
  );
};

export default Layout;
