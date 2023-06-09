import { useDispatch, useSelector } from 'react-redux';

import {
	Currency,
	Language,
	Theme,
	changeCurrency,
	changeLang,
	changePopups,
	changeTheme,
} from '@redux/reducers/appSettingsSlice';
import IStore from '@redux/types/redux-types';

interface SettingController<T> {
	get: () => T;
	set: (newValue: T) => void;
}

interface IUseAppSettings {
	appVersion: Omit<SettingController<string>, 'set'>;
	language: SettingController<Language>;
	cookiePrefix: Omit<SettingController<string>, 'set'>;
	theme: SettingController<Theme>;
	popups: SettingController<boolean>;
	currency: SettingController<Currency>;
}

const useAppSettings = (): IUseAppSettings => {
	const dispatch = useDispatch();

	return {
		appVersion: {
			get: () => useSelector((state: IStore) => state.appSettings.appVersion),
		},
		language: {
			get: () => useSelector((state: IStore) => state.appSettings.language),
			set: newValue => dispatch(changeLang(newValue)),
		},
		cookiePrefix: {
			get: () => useSelector((state: IStore) => state.appSettings.cookiePrefix),
		},
		theme: {
			get: () => useSelector((state: IStore) => state.appSettings.theme),
			set: newValue => dispatch(changeTheme(newValue)),
		},
		popups: {
			get: () =>
				useSelector((state: IStore) => state.appSettings.popupsEnabled),
			set: newValue => dispatch(changePopups(newValue)),
		},
		currency: {
			get: () => useSelector((state: IStore) => state.appSettings.currency),
			set: newValue => dispatch(changeCurrency(newValue)),
		},
	};
};

export default useAppSettings;
