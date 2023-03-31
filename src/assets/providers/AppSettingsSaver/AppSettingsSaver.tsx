import cn from 'classnames';
import { FC, useEffect } from 'react';
import styles from './AppSettingsSaver.module.scss';
import { AppSettingsSaverProps } from './AppSettingsSaver.props';
import { ProviderProps } from '@providers/Provider.props';
import {
  AppSettings,
  initialAppSettings,
} from '@redux/reducers/appSettingsSlice';
import { useDispatch, useSelector } from 'react-redux';
import IStore from '@redux/types/redux-types';
import useAppSettings from '@hooks/useAppSettings';
import { useLocalStorage } from '@hooks/useLocalStorage';

const AppSettingsSaver: FC<ProviderProps> = ({ children }) => {
  const { theme, language, cookiePrefix } = useAppSettings();
  const dispatch = useDispatch();

  // Local storage
  const appSettings = useSelector((state: IStore) => state.appSettings);
  const [getCookieSettings, setCookieSettings] = useLocalStorage<AppSettings>(
    `${cookiePrefix.get()}-app-settings`,
    initialAppSettings,
  );

  // Load data from cookies
  useEffect(() => {
    theme.set(getCookieSettings.theme);
    language.set(getCookieSettings.language);
  }, []);

  // Save app settings to cookie
  useEffect(() => {
    setCookieSettings(appSettings);
  }, [theme.get(), language.get()]);

  return <>{children}</>;
};

export default AppSettingsSaver;
