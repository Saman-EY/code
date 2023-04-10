import React, {useState} from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import Topbar from '../components/Dashboard/Topbar';
import DashSidebar from '../components/Dashboard/DashSidebar';
import DashBreadcrumbs from '../template/T-Dashboard/DashBreadcrumbs';

const Dashboard = () => {

  let [open, setopen] = useState(true);


  return (
    <>
      <Topbar state={open} setstate={setopen} />
      <div className="flex ">
        <DashSidebar state={open} setstate={setopen} />
        <div className='flex-1'>
          <DashBreadcrumbs />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
