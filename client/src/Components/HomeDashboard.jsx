import React from 'react';
import Sidebar from './SideBar';
import { Outlet } from 'react-router-dom'; 

function HomeDashboard() {
  return (
    <div>
      <Sidebar>
        <Outlet />
      </Sidebar>
    </div>
  );
}

export default HomeDashboard;
