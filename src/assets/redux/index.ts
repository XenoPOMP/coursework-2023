import { combineReducers, configureStore } from '@reduxjs/toolkit';
import appSettingsSlice from '@redux/reducers/appSettingsSlice';
import serviceListSlice from '@redux/reducers/serviceListSlice';
import lastPageSlice from '@redux/reducers/lastPageSlice';

const rootReducer = combineReducers({
  appSettings: appSettingsSlice,
  serviceList: serviceListSlice,
  lastPage: lastPageSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
