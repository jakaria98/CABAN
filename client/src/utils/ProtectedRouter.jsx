import React, { useContext, useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { MyInfoContext } from '../contexts/myInfoContext';

const ProtectedRouter = () => {
    const { auth } = useContext(MyInfoContext);
    return auth ? <Outlet /> : <Navigate to="/unauthorized" />;
};

export default ProtectedRouter;
