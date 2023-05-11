import DeviceType from '@type/DeviceType';
import { createContext } from 'react';
import { Socket, io } from 'socket.io-client';

import useEnv from '@hooks/useEnv';

const { DOMAIN } = useEnv();
export const socket = (
	allowed: boolean,
	sessionToken: string,
	device: DeviceType
) =>
	io(
		`ws://${DOMAIN}:80?allow=${allowed}&sessionToken=${sessionToken}&device=${device}`,
		{
			autoConnect: allowed,
			reconnection: false,
		}
	);

export const WebsocketContext = createContext<Socket>(
	socket(false, '', 'desktop')
);
export const WebsocketProvider = WebsocketContext.Provider;
