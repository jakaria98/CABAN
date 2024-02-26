import React, { useState, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from './useAuth';

const ProtectedRouter = () => {
    const [auth, setAuth] = useState(false);

    // there is a bug in the code, the auth state is not working properly and app is re-rendering infinitely

    useEffect(() => {
        const checkAuth = async () => {
            const isAuthenticated = await useAuth();
            console.log('ProtectedRouter isAuthenticated:', isAuthenticated); // (1)
            setAuth(isAuthenticated);
        };

        checkAuth();
    }, [auth]);

    return auth ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRouter;
