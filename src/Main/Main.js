import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import MenuBar from '../components/MenuBar/MenuBar';
import { Outlet } from 'react-router';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <MenuBar></MenuBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;