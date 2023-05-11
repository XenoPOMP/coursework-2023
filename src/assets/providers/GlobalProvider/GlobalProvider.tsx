import { FC } from 'react';

import AppSettingsSaver from '@providers/AppSettingsSaver/AppSettingsSaver';
import AuthSaver from '@providers/AuthSaver/AuthSaver';
import LayersProvider from '@providers/LayersProvider/LayersProvider';
import LocaleChecker from '@providers/LocaleChecker/LocaleChecker';
import { ProviderProps } from '@providers/Provider.props';
import ServiceListSaver from '@providers/ServiceListSaver/ServiceListSaver';
import SizesProvider from '@providers/SizesProvider/SizesProvider';
import ThemeProvider from '@providers/ThemeProvider/ThemeProvider';

const GlobalProvider: FC<ProviderProps> = ({ children }) => {
	return (
		<>
			<AuthSaver>
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
			</AuthSaver>
		</>
	);
};

export default GlobalProvider;
