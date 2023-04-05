import { FC, useContext } from 'react';
import { ProviderProps } from '@providers/Provider.props';
import {
  socket,
  WebsocketContext,
  WebsocketProvider,
} from '@contexts/WebSocketContext';
import { SessionTokenContext } from '@contexts/SessionTokenContext';
import useAnalyticsAllowed from '@hooks/useAnalyticsAllowed';
import { v4 as uuid } from 'uuid';

const AnalyticsSavers: FC<ProviderProps> = ({ children }) => {
  const allowed = useAnalyticsAllowed();
  const token = useContext(SessionTokenContext);

  return (
    <SessionTokenContext.Provider value={uuid()}>
      <WebsocketContext.Provider value={socket(allowed, token)}>
        {children}
      </WebsocketContext.Provider>
    </SessionTokenContext.Provider>
  );
};

export default AnalyticsSavers;
