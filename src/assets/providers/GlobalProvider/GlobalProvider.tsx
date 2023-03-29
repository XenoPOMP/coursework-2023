import { FC } from 'react';
import { ProviderProps } from '@providers/Provider.props';
import ThemeProvider from '@providers/ThemeProvider/ThemeProvider';
import SizesProvider from '@providers/SizesProvider/SizesProvider';
import LayersProvider from '@providers/LayersProvider/LayersProvider';
import ServiceListSaver from '@providers/ServiceListSaver/ServiceListSaver';
import AppSettingsSaver from '@providers/AppSettingsSaver/AppSettingsSaver';

const GlobalProvider: FC<ProviderProps> = ({ children }) => {
  return (
    <>
      <AppSettingsSaver>
        <ServiceListSaver>
          <LayersProvider>
            <SizesProvider>
              <ThemeProvider>{children}</ThemeProvider>
            </SizesProvider>
          </LayersProvider>
        </ServiceListSaver>
      </AppSettingsSaver>
    </>
  );
};

export default GlobalProvider;
