import { combineReducers, configureStore } from '@reduxjs/toolkit';

import adminSlice from '@redux/reducers/adminSlice';
import analyticsSlice from '@redux/reducers/analyticsSlice';
import appSettingsSlice from '@redux/reducers/appSettingsSlice';
import authSlice from '@redux/reducers/authSlice';
import lastPageSlice from '@redux/reducers/lastPageSlice';
import serviceListSlice from '@redux/reducers/serviceListSlice';

const rootReducer = combineReducers({
	appSettings: appSettingsSlice,
	serviceList: serviceListSlice,
	lastPage: lastPageSlice,
	analytics: analyticsSlice,
	auth: authSlice,
	admin: adminSlice,
});

export const store = configureStore({
	reducer: rootReducer,
});
