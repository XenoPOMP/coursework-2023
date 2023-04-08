import { createSlice } from '@reduxjs/toolkit';
import { ReduxAction } from '@redux/types/redux-types';

export type Language = 'ru' | 'en';
export type Theme = 'light' | 'dark';
export type Currency = 'rub' | 'usd';

export type AppSettings = {
  appVersion: string;
  language: Language;
  cookiePrefix: string;
  theme: Theme;
  currency: Currency;
};

const initialState: AppSettings = {
  appVersion: '1.0.2',
  language: 'ru',
  cookiePrefix: 'smart-ace',
  theme: 'light',
  currency: 'rub',
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

    changeCurrency(state, action: ReduxAction<Currency>) {
      state.currency = action.payload;
    },
  },
});

export default appSettingsSlice.reducer;
export const { changeLang, changeTheme, changeCurrency } =
  appSettingsSlice.actions;
export const initialAppSettings = appSettingsSlice.getInitialState();
