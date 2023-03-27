import { combineReducers, configureStore } from '@reduxjs/toolkit';
import appSettingsSlice from '@redux/reducers/appSettingsSlice';
import serviceListSlice from '@redux/reducers/serviceListSlice';

const rootReducer = combineReducers({
  appSettings: appSettingsSlice,
  serviceList: serviceListSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
