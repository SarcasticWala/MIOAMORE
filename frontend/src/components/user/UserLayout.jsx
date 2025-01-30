import React from 'react';
import UserHeader from './UserHeader';
import UserSidebar from './UserSidebar';

const UserLayout = ({ children }) => {
  return (
    <div>
      <UserHeader />
      <UserSidebar />
      <main>{children}</main>
    </div>
  );
};

export default UserLayout;
