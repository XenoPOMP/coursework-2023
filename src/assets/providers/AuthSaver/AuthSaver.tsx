import cn from 'classnames';
import { FC, useEffect } from 'react';

import { initialAuthState } from '@redux/reducers/authSlice';

import { ProviderProps } from '@providers/Provider.props';

import useAppSettings from '@hooks/useAppSettings';
import useAuth from '@hooks/useAuth';
import useEnv from '@hooks/useEnv';
import { useLocalStorage } from '@hooks/useLocalStorage';

import styles from './AuthSaver.module.scss';
import { AuthSaverProps } from './AuthSaver.props';

const AuthSaver: FC<ProviderProps> = ({ children }) => {
	const { cookiePrefix } = useAppSettings();
	const { uuid, signUp } = useAuth();
	const [getCookieUuid, setCookieUuid] = useLocalStorage<string | null>(
		`${cookiePrefix.get()}-uuid`,
		initialAuthState.uuid
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
