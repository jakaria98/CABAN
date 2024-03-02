import React, { useContext, useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { MyInfoContext } from '../contexts/myInfoContext';
import Sidebar from '../components/Sidebar';

const ProtectedRouter = () => {
    const { auth } = useContext(MyInfoContext);
    return auth ? <Outlet /> : <Navigate to="/unauthorized" />;
};

export default ProtectedRouter;
