import { createSlice } from '@reduxjs/toolkit';
import { ReduxAction } from '@redux/types/redux-types';

export type Analytics = {
  agreement: {
    everShown: boolean;
    allowAnalytics: boolean;
  };
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
    simpleAction(state, action: ReduxAction<any>) {},
  },
});

export default analyticsSlice.reducer;
export const { simpleAction } = analyticsSlice.actions;
