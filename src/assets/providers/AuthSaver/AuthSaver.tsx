import cn from 'classnames';
import { FC, useEffect } from 'react';
import styles from './AuthSaver.module.scss';
import { AuthSaverProps } from './AuthSaver.props';
import { ProviderProps } from '@providers/Provider.props';
import useAuth from '@hooks/useAuth';
import { useLocalStorage } from '@hooks/useLocalStorage';
import useEnv from '@hooks/useEnv';
import useAppSettings from '@hooks/useAppSettings';
import { initialAuthState } from '@redux/reducers/authSlice';

const AuthSaver: FC<ProviderProps> = ({ children }) => {
  const { cookiePrefix } = useAppSettings();
  const { uuid, signUp } = useAuth();
  const [getCookieUuid, setCookieUuid] = useLocalStorage<string | null>(
    `${cookiePrefix.get()}-uuid`,
    initialAuthState.uuid,
  );

  // Load uuid from cookie
  useEffect(() => {
    signUp(getCookieUuid);
  }, []);

  // Save uuid to cookie
  useEffect(() => {
    setCookieUuid(uuid);
  }, [uuid]);

  return <>{children}</>;
};

export default AuthSaver;
