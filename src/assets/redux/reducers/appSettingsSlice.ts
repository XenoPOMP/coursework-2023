import { createSlice } from '@reduxjs/toolkit';
import { ReduxAction } from '@redux/types/redux-types';

export type Language = 'ru' | 'en';

export type AppSettings = {
  appVersion: string,
  language: Language,
};

const initialState: AppSettings = {
  appVersion: '0.01',
  language: 'ru',
};

const appSettingsSlice = createSlice({
  name: 'appSettings',
  initialState,
  reducers: {
    changeLang(state, action: ReduxAction<Language>) {
      state.language = action.payload;
    },
  },
});

export default appSettingsSlice.reducer;
export const { changeLang } = appSettingsSlice.actions;
export const initialAppSettings = appSettingsSlice.getInitialState();
