import { AppSettings } from '@redux/reducers/appSettingsSlice';
import { ServiceList } from '@redux/reducers/serviceListSlice';
import { LastPageList } from '@redux/reducers/lastPageSlice';
import { Analytics } from '@redux/reducers/analyticsSlice';
import { AuthState } from '@redux/reducers/authSlice';
import { AdminPage } from '@redux/reducers/adminSlice';

interface IStore {
  appSettings: AppSettings;
  serviceList: ServiceList;
  lastPage: LastPageList;
  analytics: Analytics;
  auth: AuthState;
  admin: AdminPage;
}

export type ReduxAction<A> = {
  payload: A;
  type: string;
};

export default IStore;
