import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/admin/Dashboard';
import ManageMioAmore from '../pages/admin/ManageMioAmore';
import ManageIceCream from '../pages/admin/ManageIceCream';
import ManageMotherDairy from '../pages/admin/ManageMotherDairy';
import ManageUsers from '../pages/admin/ManageUsers';
import ManageContent from '../pages/admin/ManageContent';

function AdminRoutes() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/manage-mio-amore" element={<ManageMioAmore />} />
      <Route path="/manage-ice-cream" element={<ManageIceCream />} />
      <Route path="/manage-mother-dairy" element={<ManageMotherDairy />} />
      <Route path="/manage-users" element={<ManageUsers />} />
      <Route path="/manage-content" element={<ManageContent />} />
    </Routes>
  );
}

export default AdminRoutes;