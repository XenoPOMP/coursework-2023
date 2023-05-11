import { useDispatch, useSelector } from 'react-redux';

import {
	AnalyticsAgreement,
	switchAllow,
} from '@redux/reducers/analyticsSlice';
import IStore from '@redux/types/redux-types';

const useAnalyticsAllowed = (): {
	isAllowed: boolean;
	allow: () => void;
	disallow: () => void;
} => {
	const { allowAnalytics }: AnalyticsAgreement = useSelector(
		(state: IStore) => state.analytics.agreement
	);

	const dispatch = useDispatch();

	return {
		isAllowed: allowAnalytics,
		allow: () => dispatch(switchAllow(true)),
		disallow: () => dispatch(switchAllow(false)),
	};
};

export default useAnalyticsAllowed;
