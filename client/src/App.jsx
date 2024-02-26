import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import AllUserInfoProvider from './contexts/AllUserInfo.jsx';
import DepartmentProvider from './contexts/DepartmentContext.jsx';

import './App.css';
import Login from './pages/LoginPage.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Sidebar from './components/Sidebar.jsx';
import WeatherPage from './pages/WeatherPage.jsx';
import Cargo from './pages/Cargo.jsx';
import Charter from './pages/Charter.jsx';
import Reporting from './pages/Reporting.jsx';
import Vale from './pages/Vale.jsx';
import Pax from './pages/Pax.jsx';
import Sked from './pages/Sked.jsx';
import ProtectedRouter from './utils/ProtectedRouter.jsx';
import useAuth from './utils/useAuth.jsx';

function App() {
    const [auth, setAuth] = useState(null);
    const navigate = useNavigate();

    // there is a bug in the code, the auth state is not working properly and app is re-rendering infinitely
    useEffect(() => {
        const checkAuth = async () => {
            const isAuthenticated = await useAuth();
            console.log('App isAuthenticated:', isAuthenticated); // (1)
            setAuth(isAuthenticated);
        };

        checkAuth();
    }, []); // Run only once when the component mounts

    useEffect(() => {
        // Redirect based on auth status
        if (auth === false) {
            navigate('/');
        }
    }, [auth, navigate]);

    return (
        <div>
            {auth && <Sidebar />}
            <Routes>
                <Route path="/" element={<Login />} />
                 <Route path="/*" element={<ProtectedRouter />}>
                    <Route
                        path="dashboard"
                        element={
                            <DepartmentProvider>
                                <AllUserInfoProvider>
                                    <Dashboard />
                                </AllUserInfoProvider>
                            </DepartmentProvider>
                        }
                    />
                    <Route path="weather" element={<WeatherPage />} />
                    <Route path="cargo" element={<Cargo />} />
                    <Route path="charter" element={<Charter />} />
                    <Route path="reporting" element={<Reporting />} />
                    <Route path="vale" element={<Vale />} />
                    <Route path="pax" element={<Pax />} />
                    <Route path="sked" element={<Sked />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
