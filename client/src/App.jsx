import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Axios from 'axios';

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
import { MyInfoProvider } from './contexts/myInfoContext.jsx';

function App() {
    const { auth } = useAuth();
    return (
        <MyInfoProvider>
            <div>
                {auth && <Sidebar />}
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/unauthorized" element={<h1>Unauthorized</h1>} />
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
        </MyInfoProvider>
    );
}

export default App;
