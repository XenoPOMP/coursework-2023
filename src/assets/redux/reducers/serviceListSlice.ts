import { createSlice } from '@reduxjs/toolkit';
import { ReduxAction } from '@redux/types/redux-types';

export type ServiceList = {
  search: string,
};

const initialState: ServiceList = {
  search: '',
};

const serviceListSlice = createSlice({
  name: 'serviceList',
  initialState,
  reducers: {
    changeServiceSearch(state, action: ReduxAction<string>) {
      state.search = action.payload;
    },
  },
});

export default serviceListSlice.reducer;
export const { changeServiceSearch } = serviceListSlice.actions;
export const initialServiceList = serviceListSlice.getInitialState();
