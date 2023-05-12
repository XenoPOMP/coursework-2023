import { ServiceLocale } from '@localization/Localization';
import { createSlice } from '@reduxjs/toolkit';

import { ReduxAction } from '@redux/types/redux-types';

import useLocalization from '@hooks/useLocalization';

export type ServiceIcon = 'thunderbolt' | 'mall' | 'global';

export type ServiceList = {
	search: string;
	services: Array<{
		isFavorite: boolean;
		icon: ServiceIcon;
		index: number;
	}>;
};

const initialState: ServiceList = {
	search: '',
	services: [
		{
			isFavorite: false,
			icon: 'thunderbolt',
			index: 0,
		},

		{
			isFavorite: false,
			icon: 'mall',
			index: 1,
		},

		{
			isFavorite: false,
			icon: 'global',
			index: 2,
		},
	],
};

const serviceListSlice = createSlice({
	name: 'serviceList',
	initialState,
	reducers: {
		// prettier-ignore
		loadServicesFromLocalStorage(
      state,
      action: ReduxAction<
        Array<{
          isFavorite: boolean,
          icon: ServiceIcon,
          index: number,
        }>
      >,
    ) {
      state.services = action.payload;
    },

		changeServiceSearch(state, action: ReduxAction<string>) {
			state.search = action.payload;
		},

		toggleStar(state, action: ReduxAction<number>) {
			state.services[action.payload].isFavorite =
				!state.services[action.payload].isFavorite;
		},
	},
});

export default serviceListSlice.reducer;
export const { changeServiceSearch, toggleStar, loadServicesFromLocalStorage } =
	serviceListSlice.actions;
export const initialServiceList = serviceListSlice.getInitialState();
