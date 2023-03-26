import { FC } from 'react';
import { ProviderProps } from '@providers/Provider.props';
import ThemeProvider from '@providers/ThemeProvider/ThemeProvider';

const GlobalProvider: FC<ProviderProps> = ({ children }) => {
  return (
    <>
      <ThemeProvider>{children}</ThemeProvider>
    </>
  );
};

export default GlobalProvider;
