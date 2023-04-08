import { combineReducers, configureStore } from '@reduxjs/toolkit';
import appSettingsSlice from '@redux/reducers/appSettingsSlice';
import serviceListSlice from '@redux/reducers/serviceListSlice';
import lastPageSlice from '@redux/reducers/lastPageSlice';
import analyticsSlice from '@redux/reducers/analyticsSlice';
import authSlice from '@redux/reducers/authSlice';

const rootReducer = combineReducers({
  appSettings: appSettingsSlice,
  serviceList: serviceListSlice,
  lastPage: lastPageSlice,
  analytics: analyticsSlice,
  auth: authSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
