import { FC, useContext, useEffect } from 'react';
import { v4 as uuid } from 'uuid';

import { SessionTokenContext } from '@contexts/SessionTokenContext';
import { WebsocketContext, socket } from '@contexts/WebSocketContext';

import { ProviderProps } from '@providers/Provider.props';

import useAnalyticsAllowed from '@hooks/useAnalyticsAllowed';
import useDeviceType from '@hooks/useDeviceType';

const AnalyticsSavers: FC<ProviderProps> = ({ children }) => {
	const { isAllowed } = useAnalyticsAllowed();
	const token = useContext(SessionTokenContext);
	const activeSocket = useContext(WebsocketContext);
	const deviceType = useDeviceType();

	useEffect(() => {
		const connected = activeSocket.connected;
		const disconnected = activeSocket.disconnected;

		// Disconnect client if analytics are not
		// allowed
		if (!isAllowed && connected) {
			activeSocket.disconnect();
		}

		// Connect user to socket server if
		// he / she is not connected yet
		if (isAllowed && disconnected) {
			activeSocket.connect();
		}
	}, [isAllowed]);

	return (
		<SessionTokenContext.Provider value={uuid()}>
			<WebsocketContext.Provider value={socket(isAllowed, token, deviceType)}>
				{children}
			</WebsocketContext.Provider>
		</SessionTokenContext.Provider>
	);
};

export default AnalyticsSavers;
