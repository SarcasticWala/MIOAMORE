import { Routes, Route } from 'react-router-dom';
import MioAmoreOverview from '../pages/user/mioAmoreDashboard/Overview.jsx';
import IceCreamOverview from '../pages/user/iceCreamDashboard/Overview.jsx';
import MotherDairyOverview from '../pages/user/motherDairyDashboard/Overview.jsx';

function UserRoutes() {
  return (
    <Routes>
      <Route path="/dashboard-mio-amore" element={<MioAmoreOverview />} />
      <Route path="/dashboard-ice-cream" element={<IceCreamOverview />} />
      <Route path="/dashboard-mother-dairy" element={<MotherDairyOverview />} />
    </Routes>
  );
}

export default UserRoutes;