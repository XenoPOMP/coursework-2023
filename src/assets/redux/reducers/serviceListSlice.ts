import { createSlice } from '@reduxjs/toolkit';
import { ReduxAction } from '@redux/types/redux-types';
import { ServiceLocale } from '@localization/Localization';
import useLocalization from '@hooks/useLocalization';

export type ServiceList = {
  search: string,
  services: Array<{
    isFavorite: boolean,
    icon: 'thunderbolt',
    index: number,
  }>,
};

const initialState: ServiceList = {
  search: '',
  services: [
    {
      isFavorite: true,
      icon: 'thunderbolt',
      index: 0,
    },
  ],
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
