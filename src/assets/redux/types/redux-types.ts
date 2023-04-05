import { AppSettings } from '@redux/reducers/appSettingsSlice';
import { ServiceList } from '@redux/reducers/serviceListSlice';
import { LastPageList } from '@redux/reducers/lastPageSlice';
import { Analytics } from '@redux/reducers/analyticsSlice';

interface IStore {
  appSettings: AppSettings;
  serviceList: ServiceList;
  lastPage: LastPageList;
  analytics: Analytics;
}

export type ReduxAction<A> = {
  payload: A;
  type: string;
};

export default IStore;
