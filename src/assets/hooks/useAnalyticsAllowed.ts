import { AnalyticsAgreement } from '@redux/reducers/analyticsSlice';
import { useSelector } from 'react-redux';
import IStore from '@redux/types/redux-types';
import { useMemo } from 'react';

const useAnalyticsAllowed = (): boolean => {
  const { allowAnalytics }: AnalyticsAgreement = useSelector(
    (state: IStore) => state.analytics.agreement,
  );

  return allowAnalytics;
};

export default useAnalyticsAllowed;
