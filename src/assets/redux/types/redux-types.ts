import { AppSettings } from '@redux/reducers/appSettingsSlice';
import { ServiceList } from '@redux/reducers/serviceListSlice';

interface IStore {
  appSettings: AppSettings;
  serviceList: ServiceList;
}

export type ReduxAction<A> = {
  payload: A,
  type: string,
};

export default IStore;
