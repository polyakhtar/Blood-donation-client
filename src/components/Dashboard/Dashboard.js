import React from 'react';
import DashboardRoutes from './DashboardRoutes/DashboardRoutes';
import DashboardLayOut from './DashboardLayOut/DashboardLayOut';

const Dashboard = () => {
    return (
        <div className="flex flex-col md:flex-row">
        {/* সাইডবার */}
        <div className="bg-gray-200 w-full md:w-1/4">
          <DashboardRoutes></DashboardRoutes>
        </div>
  
        {/* ড্যাশবোর্ড কন্টেন্ট */}
        <div className='bg-blue-100 w-full ml-auto'>
  
          <div className='mt-8 p-2 '>
            <DashboardLayOut></DashboardLayOut>
          </div>
        </div>
      </div>
    );
};

export default Dashboard;