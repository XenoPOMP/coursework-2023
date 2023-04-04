import { FC } from 'react';
import { ProviderProps } from '@providers/Provider.props';
import { socket, WebsocketProvider } from '@contexts/WebSocketContext';

const AnalyticsSavers: FC<ProviderProps> = ({ children }) => {
  return <WebsocketProvider value={socket}>{children}</WebsocketProvider>;
};

export default AnalyticsSavers;
