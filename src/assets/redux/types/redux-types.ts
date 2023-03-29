import { AppSettings } from '@redux/reducers/appSettingsSlice';
import { ServiceList } from '@redux/reducers/serviceListSlice';
import { LastPageList } from '@redux/reducers/lastPageSlice';

interface IStore {
  appSettings: AppSettings;
  serviceList: ServiceList;
  lastPage: LastPageList;
}

export type ReduxAction<A> = {
  payload: A;
  type: string;
};

export default IStore;
