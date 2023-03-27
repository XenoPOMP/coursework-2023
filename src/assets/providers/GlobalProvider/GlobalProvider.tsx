import { FC } from 'react';
import { ProviderProps } from '@providers/Provider.props';
import ThemeProvider from '@providers/ThemeProvider/ThemeProvider';
import SizesProvider from '@providers/SizesProvider/SizesProvider';
import LayersProvider from '@providers/LayersProvider/LayersProvider';

const GlobalProvider: FC<ProviderProps> = ({ children }) => {
  return (
    <>
      <LayersProvider>
        <SizesProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </SizesProvider>
      </LayersProvider>
    </>
  );
};

export default GlobalProvider;
