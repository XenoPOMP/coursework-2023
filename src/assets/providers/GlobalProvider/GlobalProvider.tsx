import { FC } from 'react';
import { ProviderProps } from '@providers/Provider.props';
import ThemeProvider from '@providers/ThemeProvider/ThemeProvider';
import SizesProvider from '@providers/SizesProvider/SizesProvider';
import LayersProvider from '@providers/LayersProvider/LayersProvider';
import ServiceListSaver from '@providers/ServiceListSaver/ServiceListSaver';

const GlobalProvider: FC<ProviderProps> = ({ children }) => {
  return (
    <>
      <ServiceListSaver>
        <LayersProvider>
          <SizesProvider>
            <ThemeProvider>{children}</ThemeProvider>
          </SizesProvider>
        </LayersProvider>
      </ServiceListSaver>
    </>
  );
};

export default GlobalProvider;
