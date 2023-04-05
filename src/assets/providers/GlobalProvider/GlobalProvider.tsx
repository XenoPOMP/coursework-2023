import { FC } from 'react';
import { ProviderProps } from '@providers/Provider.props';
import ThemeProvider from '@providers/ThemeProvider/ThemeProvider';
import SizesProvider from '@providers/SizesProvider/SizesProvider';
import LayersProvider from '@providers/LayersProvider/LayersProvider';
import ServiceListSaver from '@providers/ServiceListSaver/ServiceListSaver';
import AppSettingsSaver from '@providers/AppSettingsSaver/AppSettingsSaver';
import LocaleChecker from '@providers/LocaleChecker/LocaleChecker';

const GlobalProvider: FC<ProviderProps> = ({ children }) => {
  return (
    <>
      <LocaleChecker>
        <AppSettingsSaver>
          <ServiceListSaver>
            <LayersProvider>
              <SizesProvider>
                <ThemeProvider>{children}</ThemeProvider>
              </SizesProvider>
            </LayersProvider>
          </ServiceListSaver>
        </AppSettingsSaver>
      </LocaleChecker>
    </>
  );
};

export default GlobalProvider;
