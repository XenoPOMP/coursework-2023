import { createSlice } from '@reduxjs/toolkit';

import { ReduxAction } from '@redux/types/redux-types';

export type AnalyticsAgreement = {
	everShown: boolean;
	allowAnalytics: boolean;
};

export type Analytics = {
	agreement: AnalyticsAgreement;
};

const initialState: Analytics = {
	agreement: {
		everShown: false,
		allowAnalytics: false,
	},
};

const analyticsSlice = createSlice({
	name: 'analyticsSlice',
	initialState,
	reducers: {
		switchAllow(state, action: ReduxAction<boolean>) {
			state.agreement.allowAnalytics = action.payload;
			state.agreement.everShown = true;
		},

		loadAnalyticsAgreement(state, action: ReduxAction<AnalyticsAgreement>) {
			state.agreement.everShown = action.payload.everShown;
			state.agreement.allowAnalytics = action.payload.allowAnalytics;
		},
	},
});

export default analyticsSlice.reducer;
export const { switchAllow, loadAnalyticsAgreement } = analyticsSlice.actions;
export const analyticsInitial = analyticsSlice.getInitialState();
