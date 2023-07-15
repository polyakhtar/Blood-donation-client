import React from 'react';
import { Outlet } from 'react-router';

const DashboardLayOut = () => {
    return (
        <div>
            <Outlet></Outlet>
       </div>
        
    );
};

export default DashboardLayOut;