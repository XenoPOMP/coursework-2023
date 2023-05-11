import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import AuthPage from '@pages/AuthPage/AuthPage';
import BlogPage from '@pages/BlogPage/BlogPage';
import Dashboard from '@pages/Dashboard/Dashboard';
import MainPage from '@pages/MainPage/MainPage';
import NotFound from '@pages/NotFound/NotFound';
import OrderPage from '@pages/OrderPage/OrderPage';
import ServicePage from '@pages/ServicePage/ServicePage';
import SettingsPage from '@pages/SettingsPage/SettingsPage';

function App() {
	return (
		<Router>
			<Routes>
				<Route path={'*'} element={<NotFound />} />

				<Route path={'/'} element={<MainPage />} />

				<Route path={'/services'} element={<ServicePage />} />

				<Route path={'/settings'} element={<SettingsPage />} />

				<Route path={'/order'} element={<OrderPage />} />

				<Route path={'/blog'} element={<BlogPage />} />

				<Route path={'/admin/login'} element={<AuthPage />} />

				<Route path={'/admin/dashboard'} element={<Dashboard />} />
			</Routes>
		</Router>
	);
}

export default App;
