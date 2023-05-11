import { AdminPage } from '@redux/reducers/adminSlice';
import { Analytics } from '@redux/reducers/analyticsSlice';
import { AppSettings } from '@redux/reducers/appSettingsSlice';
import { AuthState } from '@redux/reducers/authSlice';
import { LastPageList } from '@redux/reducers/lastPageSlice';
import { ServiceList } from '@redux/reducers/serviceListSlice';

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
