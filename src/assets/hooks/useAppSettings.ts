import { useDispatch, useSelector } from 'react-redux';
import IStore from '@redux/types/redux-types';
import { changeLang, Language } from '@redux/reducers/appSettingsSlice';

interface SettingController<T> {
  get: () => T;
  set: (newValue: T) => void;
}

interface IUseAppSettings {
  appVersion: Omit<SettingController<string>, 'set'>;
  language: SettingController<Language>;
  cookiePrefix: Omit<SettingController<string>, 'set'>;
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
  };
};

export default useAppSettings;
