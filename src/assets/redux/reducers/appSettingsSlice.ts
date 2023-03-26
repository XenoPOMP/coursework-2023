import { createSlice } from '@reduxjs/toolkit';
import { ReduxAction } from '@redux/types/redux-types';

export type AppSettings = {
  appVersion: string,
};

const initialState: AppSettings = {
  appVersion: '0.01',
};

const appSettingsSlice = createSlice({
  name: 'appSettings',
  initialState,
  reducers: {
    simpleAction(state, action: ReduxAction<any>) {},
  },
});

export default appSettingsSlice.reducer;
export const { simpleAction } = appSettingsSlice.actions;
export const initialAppSettings = appSettingsSlice.getInitialState();
