import { createSlice } from '@reduxjs/toolkit';
import { ReduxAction } from '@redux/types/redux-types';

export type Language = 'ru' | 'en';

export type Theme = 'light' | 'dark';

export type AppSettings = {
  appVersion: string;
  language: Language;
  cookiePrefix: string;
  theme: Theme;
};

const initialState: AppSettings = {
  appVersion: '0.01',
  language: 'ru',
  cookiePrefix: 'smart-ace',
  theme: 'light',
};

const appSettingsSlice = createSlice({
  name: 'appSettings',
  initialState,
  reducers: {
    changeLang(state, action: ReduxAction<Language>) {
      state.language = action.payload;
    },

    changeTheme(state, action: ReduxAction<Theme>) {
      state.theme = action.payload;
    },
  },
});

export default appSettingsSlice.reducer;
export const { changeLang, changeTheme } = appSettingsSlice.actions;
export const initialAppSettings = appSettingsSlice.getInitialState();
