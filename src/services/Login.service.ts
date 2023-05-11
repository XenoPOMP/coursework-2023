import axios from 'axios';

import useEnv from '@hooks/useEnv';

const { SSL, DOMAIN, APP_PORT } = useEnv();

export const LoginService = {
	async login(login?: string, password?: string) {
		return await axios.post(`${SSL?.HTTP}://${DOMAIN}:${APP_PORT}/login`, {
			login,
			password,
		});
	},
};
