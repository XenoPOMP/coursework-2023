import { createSlice } from '@reduxjs/toolkit';
import { ReduxAction } from '@redux/types/redux-types';

export type DatePart = 'day' | 'week' | 'month' | 'year';

export type AdminPage = {
  datePart: DatePart;
};

const initialState: AdminPage = {
  datePart: 'day',
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    changeDatePart(state, action: ReduxAction<DatePart>) {
      state.datePart = action.payload;
    },
  },
});

export default adminSlice.reducer;
export const { changeDatePart } = adminSlice.actions;
export const initialAdminPage = adminSlice.getInitialState();
