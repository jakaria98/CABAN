import React, { useState, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from './useAuth';

const ProtectedRouter = () => {
    const [auth, setAuth] = useState(null);

    useEffect(() => {
        const checkAuth = async () => {
            const isAuthenticated = await useAuth();
            setAuth(isAuthenticated);
        };

        checkAuth();
    }, []);

    // if (auth === null) {
    //     // Loading state, you might want to render a loading spinner or something
    //     return null;
    // }
    return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRouter;
