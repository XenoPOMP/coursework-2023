import { FC, useEffect } from 'react';
import { ProviderProps } from '@providers/Provider.props';
import useAnalyticsAllowed from '@hooks/useAnalyticsAllowed';
// import useWebSocket from 'react-use-websocket';
import useEnv from '@hooks/useEnv';

const SessionTimeProvider: FC<ProviderProps> = ({ children }) => {
  const allowed = useAnalyticsAllowed();
  const { DOMAIN } = useEnv();
  // const {} = useWebSocket(
  //   `ws://${DOMAIN}:80/`,
  //   {
  //     fromSocketIO: true,
  //   },
  //   allowed,
  // );

  useEffect(() => {}, [allowed]);

  return <>{children}</>;
};

export default SessionTimeProvider;
