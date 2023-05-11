import { createSlice } from '@reduxjs/toolkit';

import { SettingsTabs } from '@pages/SettingsPage/SettingsPage';

import { ReduxAction } from '@redux/types/redux-types';

export type LastPageList = {
	settings: number;
	service: number | null;
};

const initialState: LastPageList = {
	settings: 0,
	service: null,
};

const lastPageSlice = createSlice({
	name: 'lastPage',
	initialState,
	reducers: {
		changeLastSettingsPage(state, action: ReduxAction<SettingsTabs>) {
			state.settings = action.payload;
		},

		changeLastServicePage(state, action: ReduxAction<number | null>) {
			state.service = action.payload;
		},
	},
});

export default lastPageSlice.reducer;
export const { changeLastSettingsPage, changeLastServicePage } =
	lastPageSlice.actions;
