import cn from 'classnames';
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
	AppSettings,
	initialAppSettings,
} from '@redux/reducers/appSettingsSlice';
import IStore from '@redux/types/redux-types';

import { ProviderProps } from '@providers/Provider.props';

import useAppSettings from '@hooks/useAppSettings';
import { useLocalStorage } from '@hooks/useLocalStorage';

import styles from './AppSettingsSaver.module.scss';
import { AppSettingsSaverProps } from './AppSettingsSaver.props';

const AppSettingsSaver: FC<ProviderProps> = ({ children }) => {
	const { theme, language, cookiePrefix, popups, currency } = useAppSettings();
	const dispatch = useDispatch();

	// Local storage
	const appSettings = useSelector((state: IStore) => state.appSettings);
	const [getCookieSettings, setCookieSettings] = useLocalStorage<AppSettings>(
		`${cookiePrefix.get()}-app-settings`,
		initialAppSettings
	);

	// Load data from cookies
	useEffect(() => {
		theme.set(getCookieSettings.theme);
		language.set(getCookieSettings.language);
		currency.set(getCookieSettings.currency);
		popups.set(getCookieSettings.popupsEnabled);
	}, []);

	// Save app settings to cookie
	useEffect(() => {
		setCookieSettings(appSettings);
	}, [theme.get(), language.get(), currency.get(), popups.get()]);

	return <>{children}</>;
};

export default AppSettingsSaver;
