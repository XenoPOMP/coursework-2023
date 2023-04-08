import { FC, useContext } from 'react';
import { ProviderProps } from '@providers/Provider.props';
import { socket, WebsocketContext } from '@contexts/WebSocketContext';
import { SessionTokenContext } from '@contexts/SessionTokenContext';
import useAnalyticsAllowed from '@hooks/useAnalyticsAllowed';
import { v4 as uuid } from 'uuid';
import useDeviceType from '@hooks/useDeviceType';

const AnalyticsSavers: FC<ProviderProps> = ({ children }) => {
  const { isAllowed } = useAnalyticsAllowed();
  const token = useContext(SessionTokenContext);
  const deviceType = useDeviceType();

  console.log(deviceType);

  return (
    <SessionTokenContext.Provider value={uuid()}>
      <WebsocketContext.Provider value={socket(isAllowed, token, deviceType)}>
        {children}
      </WebsocketContext.Provider>
    </SessionTokenContext.Provider>
  );
};

export default AnalyticsSavers;
