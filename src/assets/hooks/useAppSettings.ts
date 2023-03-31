import { useDispatch, useSelector } from 'react-redux';
import IStore from '@redux/types/redux-types';
import {
  changeCurrency,
  changeLang,
  changeTheme,
  Currency,
  Language,
  Theme,
} from '@redux/reducers/appSettingsSlice';

interface SettingController<T> {
  get: () => T;
  set: (newValue: T) => void;
}

interface IUseAppSettings {
  appVersion: Omit<SettingController<string>, 'set'>;
  language: SettingController<Language>;
  cookiePrefix: Omit<SettingController<string>, 'set'>;
  theme: SettingController<Theme>;
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
      set: (newValue) => dispatch(changeLang(newValue)),
    },
    cookiePrefix: {
      get: () => useSelector((state: IStore) => state.appSettings.cookiePrefix),
    },
    theme: {
      get: () => useSelector((state: IStore) => state.appSettings.theme),
      set: (newValue) => dispatch(changeTheme(newValue)),
    },
    currency: {
      get: () => useSelector((state: IStore) => state.appSettings.currency),
      set: (newValue) => dispatch(changeCurrency(newValue)),
    },
  };
};

export default useAppSettings;
