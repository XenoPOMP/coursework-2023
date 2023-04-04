import { FC } from 'react';
import { ProviderProps } from '@providers/Provider.props';
import SessionTimeProvider from '@providers/SessionTimeProvider/SessionTimeProvider';

const AnalyticsSavers: FC<ProviderProps> = ({ children }) => {
  return <SessionTimeProvider>{children}</SessionTimeProvider>;
};

export default AnalyticsSavers;
