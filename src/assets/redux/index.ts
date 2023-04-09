import { combineReducers, configureStore } from '@reduxjs/toolkit';
import appSettingsSlice from '@redux/reducers/appSettingsSlice';
import serviceListSlice from '@redux/reducers/serviceListSlice';
import lastPageSlice from '@redux/reducers/lastPageSlice';
import analyticsSlice from '@redux/reducers/analyticsSlice';
import authSlice from '@redux/reducers/authSlice';
import adminSlice from '@redux/reducers/adminSlice';

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
