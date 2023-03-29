import { createSlice } from '@reduxjs/toolkit';
import { ReduxAction } from '@redux/types/redux-types';
import { SettingsTabs } from '@pages/SettingsPage/SettingsPage';

export type LastPageList = {
  settings: number;
};

const initialState: LastPageList = {
  settings: 0,
};

const lastPageSlice = createSlice({
  name: 'lastPage',
  initialState,
  reducers: {
    changeLastSettingsPage(state, action: ReduxAction<SettingsTabs>) {
      state.settings = action.payload;
    },
  },
});

export default lastPageSlice.reducer;
export const { changeLastSettingsPage } = lastPageSlice.actions;
