import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from '@pages/MainPage/MainPage';
import NotFound from '@pages/NotFound/NotFound';
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
      </Routes>
    </Router>
  );
}

export default App;
