import { useSelector } from 'react-redux';
import IStore from '@redux/types/redux-types';

interface SettingController<T> {
  get: () => T;
  set: (newValue: T) => void;
}

interface IUseAppSettings {
  appVersion: Omit<SettingController<string>, 'set'>;
}

const useAppSettings = (): IUseAppSettings => {
  return {
    appVersion: {
      get: () => useSelector((state: IStore) => state.appSettings.appVersion),
    },
  };
};

export default useAppSettings;
