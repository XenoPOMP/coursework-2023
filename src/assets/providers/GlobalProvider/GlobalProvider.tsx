import { FC } from 'react';
import { ProviderProps } from '@providers/Provider.props';
import ThemeProvider from '@providers/ThemeProvider/ThemeProvider';
import SizesProvider from '@providers/SizesProvider/SizesProvider';

const GlobalProvider: FC<ProviderProps> = ({ children }) => {
  return (
    <>
      <SizesProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </SizesProvider>
    </>
  );
};

export default GlobalProvider;
