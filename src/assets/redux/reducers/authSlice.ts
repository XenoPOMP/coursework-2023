import { createSlice } from '@reduxjs/toolkit';

import { ReduxAction } from '@redux/types/redux-types';

export type AuthState = {
	uuid: string | null;
};

const initialState: AuthState = {
	uuid: null,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		changeUuid(state, action: ReduxAction<string | null>) {
			state.uuid = action.payload;
		},
	},
});

export default authSlice.reducer;
export const { changeUuid } = authSlice.actions;
export const initialAuthState = authSlice.getInitialState();
