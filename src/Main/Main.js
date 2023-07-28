import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import MenuBar from '../components/MenuBar/MenuBar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';

const Main = () => {
    return (
        <div>
             <Navbar></Navbar> 
            <MenuBar></MenuBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;