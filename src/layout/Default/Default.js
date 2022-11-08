import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../../component/Navigation/NavigationBar';

const Default = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Default;